import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { theme } from "tailwind.config";

const Collaboration = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const smallScreen = document.body.clientWidth < 767;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
    });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    const slidingTl = gsap.timeline({ defaults: { ease: "none" } });

    slidingTl
      .to(sectionRef.current.querySelector(".ui-left"), {
        xPercent: smallScreen ? -500 : -150,
      })
      .from(
        sectionRef.current.querySelector(".ui-right"),
        { xPercent: smallScreen ? -500 : -150 },
        "<"
      );

    const st1 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 1,
      animation: timeline,
    });

    const st2 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      animation: slidingTl,
    });

    return () => {
      timeline.kill();
      slidingTl.kill();
      st1.kill();
      st2.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} aria-label="Collaboration" className="w-full relative select-none my-40">
      <div
        className={`${
          clientHeight > 650 ? "py-36" : "py-48"
        } section-container flex flex-col`}
      >
        <p className="opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-left transform-gpu">
          {Array(5)
            .fill(
              " 独立站矩阵开发 全栈系统架构 AI Agent 工作流 跨境支付集成 运营数据中台 性能极致优化 "
            )
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>

        <h2
          ref={quoteRef}
          className="mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center"
        >
          期待与您的{" "}
          <span
            className="text-strong font-semibold"
            style={{
              background: `linear-gradient(90deg, #ffffff 0%, #ffffff 50%, ${theme.colors.indigo.light} 51%, ${theme.colors.purple} 102%)`,
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            深入交流与合作
          </span>
          ！
        </h2>

        <p className="mt-6 md:mt-8 opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-right transform-gpu">
          {Array(5)
            .fill(
              " Vue3 React Node.js Koa2 WordPress WooCommerce Shopify MySQL Redis ECharts "
            )
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>
      </div>
    </section>
  );
};

export default Collaboration;
