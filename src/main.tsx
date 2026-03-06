import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const baiduTongjiKey = import.meta.env.VITE_BAIDU_TONGJI_KEY as string | undefined;
if (baiduTongjiKey) {
  (window as any)._hmt = (window as any)._hmt || [];
  const hm = document.createElement("script");
  hm.src = `https://hm.baidu.com/hm.js?${baiduTongjiKey}`;
  const s = document.getElementsByTagName("script")[0];
  s.parentNode?.insertBefore(hm, s);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
