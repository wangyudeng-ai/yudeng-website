import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import {
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, extname, join, relative } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const imageRoot = join(process.cwd(), "src/assets/images");
const manifestPath = join(process.cwd(), "scripts/optimized-images.manifest.json");
const quality = "82";
const minBytes = 300 * 1024;
const settingsKey = `sips-jpeg-q${quality}`;

async function collectJpegs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        return collectJpegs(fullPath);
      }

      const ext = extname(entry.name).toLowerCase();
      return ext === ".jpg" || ext === ".jpeg" ? [fullPath] : [];
    }),
  );

  return files.flat();
}

async function optimizeFile(file, tempDir) {
  const before = await stat(file);
  if (before.size < minBytes) {
    return { skipped: true, saved: 0 };
  }

  const tempFile = join(tempDir, `${basename(file)}.${Date.now()}`);
  await execFileAsync("sips", [
    "-s",
    "format",
    "jpeg",
    "-s",
    "formatOptions",
    quality,
    file,
    "--out",
    tempFile,
  ]);

  const after = await stat(tempFile);
  if (after.size >= before.size) {
    await rm(tempFile, { force: true });
    return { skipped: true, saved: 0 };
  }

  await rename(tempFile, file);
  return { skipped: false, saved: before.size - after.size };
}

async function fileHash(file) {
  const buffer = await readFile(file);
  return createHash("sha256").update(buffer).digest("hex");
}

async function readManifest() {
  try {
    return JSON.parse(await readFile(manifestPath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") {
      return { settings: settingsKey, files: {} };
    }
    throw error;
  }
}

async function main() {
  const tempDir = await mkdtemp(join(tmpdir(), "portfolio-images-"));
  const files = await collectJpegs(imageRoot);
  const manifest = await readManifest();

  let optimized = 0;
  let skipped = 0;
  let saved = 0;

  try {
    for (const file of files) {
      const relativePath = relative(process.cwd(), file);
      const currentHash = await fileHash(file);

      if (
        manifest.settings === settingsKey &&
        manifest.files[relativePath] === currentHash
      ) {
        skipped += 1;
        continue;
      }

      const result = await optimizeFile(file, tempDir);
      manifest.files[relativePath] = await fileHash(file);

      if (result.skipped) {
        skipped += 1;
      } else {
        optimized += 1;
        saved += result.saved;
        console.log(`optimized ${relativePath}`);
      }
    }
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }

  manifest.settings = settingsKey;
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  console.log(
    `done: optimized ${optimized}, skipped ${skipped}, saved ${(saved / 1024 / 1024).toFixed(2)} MB`,
  );
}

main().catch((error) => {
  if (error.code === "ENOENT") {
    console.error("Image optimization requires macOS sips to be available.");
  } else {
    console.error(error);
  }
  process.exit(1);
});
