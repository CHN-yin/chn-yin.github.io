import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { theme } from "tailwind.config";

const About2 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .from(quoteRef.current, { opacity: 0, duration: 2 })
        .to(quoteRef.current.querySelector(".about-3"), {
          backgroundPositionX: "100%",
          duration: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} aria-label="Philosophy" className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "py-80" : "py-72"
        } section-container`}
      >
        <h2
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          对系统性能与细节体验有着{" "}
          <span
            className="about-3 font-bold"
            style={{
              background: `linear-gradient(90deg, #ffffff 0%, #ffffff 50%, ${theme.colors.indigo.light} 51%, ${theme.colors.purple} 102%)`,
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            极致追求
          </span>{" "}
          ，让技术沉淀为可靠生产力。
        </h2>
      </div>
    </section>
  );
};

export default About2;
