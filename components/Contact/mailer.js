// 留言投递：EmailJS 将表单内容发送到 .env.local 中配置的邮箱
// 配置步骤见 .env.local.example：
//   1. https://dashboard.emailjs.com 注册（可直接用 Google 账号登录）
//   2. Email Services → Add New Service → 选 Gmail → 授权连接 → 复制 Service ID
//   3. Email Templates → Create New Template → 模板内容引用 {{name}} {{email}} {{message}} → 复制 Template ID
//   4. Account 页面复制 Public Key
//   5. 项目根目录复制 .env.local.example 为 .env.local 填入三个值，重启 dev 服务器
import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) =>
  emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    { name, email, message },
    {
      publicKey: process.env.NEXT_PUBLIC_USER_ID,
      limitRate: {
        throttle: 10000, // 10 秒内仅允许一次提交，防重复发送
      },
    }
  );

export default mail;
