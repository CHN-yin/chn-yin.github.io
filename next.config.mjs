/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出：npm run build 后生成 out/ 目录，可托管到 GitHub Pages 等任意静态主机
  output: "export",
  // 静态导出没有 Node 服务器，next/image 必须关闭服务端图片优化
  images: {
    unoptimized: true,
  },
  // 生成 xxx/index.html 形式，兼容 GitHub Pages 的静态文件路由
  trailingSlash: true,
};

export default nextConfig;
