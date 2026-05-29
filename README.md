# 王登登的个人主页

一个用于展示个人经历、产品项目与视觉作品的个人网站。

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Lucide React

## 页面结构

- 首页：个人介绍、职业主张、工具能力与联系方式
- 简历：工作经历、代表项目与成长里程碑
- 产品：vibe coding 产品项目展示
- 作品：Midjourney 案例、视觉设计与书法作品

## 本地开发

```bash
npm install
npm run dev
```

开发服务默认运行在 `http://localhost:3000`。

## 常用命令

```bash
npm run lint
npm run build
npm run preview
npm run optimize:images
```

`optimize:images` 会压缩 `src/assets/images` 下的 JPG/JPEG 图片。它不会裁剪或缩放图片，只在压缩后的文件更小时覆盖原图。

## 环境变量

百度统计为可选配置。需要启用时，在 `.env.local` 中设置：

```bash
VITE_BAIDU_TONGJI_KEY="your-baidu-tongji-key"
```

不配置该变量时，网站仍可正常运行，只是不加载百度统计脚本。

## 部署

项目可直接部署到 Vercel。推送到 GitHub 主分支后，Vercel 会自动构建并发布。
