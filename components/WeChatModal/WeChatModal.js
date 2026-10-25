import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export const openWeChatModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-wechat-modal"));
  }
};

const WeChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wechatId = "yinsh1114";

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("open-wechat-modal", handleOpen);
    window.addEventListener("close-wechat-modal", handleClose);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-wechat-modal", handleOpen);
      window.removeEventListener("close-wechat-modal", handleClose);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard
      .writeText(wechatId)
      .then(() => {
        toast.success(`微信号 ${wechatId} 已复制到剪贴板！`, {
          id: "wechat-copy",
          duration: 3000,
        });
      })
      .catch(() => {
        toast.error("复制失败，请手动长按复制", { id: "wechat-copy-err" });
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#1e1b26] to-[#120e18] p-6 text-center border border-purple/40 shadow-2xl shadow-purple/20 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-light-2 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="关闭"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Title / Header */}
            <div className="flex flex-col items-center mt-1">
              <div className="w-12 h-12 rounded-2xl bg-green/20 text-green flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8.5 4C4.36 4 1 6.91 1 10.5c0 1.95.96 3.71 2.5 4.88-.1.6-.4 1.8-1 2.5 1.2 0 2.5-.5 3.3-1.1.53.14 1.1.22 1.7.22.34 0 .67-.03 1-.08-.2-.6-.3-1.25-.3-1.92 0-3.59 3.36-6.5 7.5-6.5.4 0 .79.03 1.18.08C16.14 5.92 12.63 4 8.5 4zm-2.25 4c.69 0 1.25.56 1.25 1.25S6.94 10.5 6.25 10.5 5 9.94 5 9.25 5.56 8 6.25 8zm4.5 0c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S9.5 9.94 9.5 9.25 10.06 8 10.75 8zM16 11c-3.59 0-6.5 2.46-6.5 5.5 0 1.69.89 3.21 2.31 4.22-.09.52-.35 1.56-.88 2.17 1.05 0 2.18-.44 2.87-.96.46.12.95.19 1.47.19 3.59 0 6.5-2.46 6.5-5.5S19.59 11 16 11zm-2 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                扫码添加微信
              </h3>
              <p className="text-xs text-gray-light-3 mt-1">
                欢迎技术交流与工作机会沟通
              </p>
            </div>

            {/* QR Code Container with White Card for Reliable Scanning */}
            <div className="relative mx-auto my-5 p-3 bg-white rounded-2xl shadow-lg shadow-purple/10 max-w-[240px]">
              <Image
                src="/wechat-qr.webp"
                alt="尹晟鸿的微信二维码"
                width={220}
                height={220}
                className="rounded-xl w-full h-auto object-contain"
                priority
              />
            </div>

            {/* WeChat ID and Copy Button */}
            <div className="flex flex-col items-center gap-2 mt-2">
              <div className="flex items-center gap-2 text-sm text-gray-light-2">
                <span>微信号：</span>
                <span className="font-mono text-white font-semibold tracking-wider">
                  {wechatId}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="mt-1 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-light to-indigo-dark text-white text-xs font-medium tracking-wide hover:opacity-90 active:scale-95 transition-all shadow-md shadow-indigo-dark/30 cursor-pointer"
              >
                复制微信号
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WeChatModal;
