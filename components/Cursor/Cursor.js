import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ isDesktop }) => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (isDesktop && document.body.clientWidth > 767) {
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      // quickTo 复用同一补间实例，避免每次 mousemove 新建/销毁 tween（高轮询率鼠标下的卡顿来源）
      const cursorX = gsap.quickTo(cursor.current, "x", { duration: 0.12, ease: "none" });
      const cursorY = gsap.quickTo(cursor.current, "y", { duration: 0.12, ease: "none" });
      const followerX = gsap.quickTo(follower.current, "x", { duration: 0.35, ease: "power2.out" });
      const followerY = gsap.quickTo(follower.current, "y", { duration: 0.35, ease: "power2.out" });

      const moveCircle = (e) => {
        cursorX(e.clientX);
        cursorY(e.clientY);
        followerX(e.clientX);
        followerY(e.clientY);
      };

      const hover = () => {
        gsap.to(cursor.current, {
          scale: 0.5,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 3,
          duration: 0.3,
        });
      };

      const unHover = () => {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 1,
          duration: 0.3,
        });
      };

      document.addEventListener("mousemove", moveCircle);

      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", hover);
        el.addEventListener("mouseleave", unHover);
      });

      return () => {
        document.removeEventListener("mousemove", moveCircle);

        document.querySelectorAll(".link").forEach((el) => {
          el.removeEventListener("mouseenter", hover);
          el.removeEventListener("mouseleave", unHover);
        });
      };
    }
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className="bg-white rounded-full fixed w-4 h-4 select-none pointer-events-none z-50 hidden will-change-transform"
      />
      <div
        ref={follower}
        className="bg-white/[0.02] border border-white/[0.2] rounded-full fixed -top-3 -left-3 w-10 h-10 select-none pointer-events-none z-50 hidden will-change-transform"
      />
    </>
  );
};

export default Cursor;
