import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS, PERSONAL_INFO } from "../../constants";
import { openWeChatModal } from "@/components/WeChatModal/WeChatModal";
import {
  IconLocation,
  IconExperience,
  IconWechat,
  IconGithub,
} from "@/components/Icons";

const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {
  const [lottie, setLottie] = useState(null);

  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);

    return () => typed.destroy();
  }, [typedElementRef]);

  useEffect(() => {
    let cancelled = false;
    import("lottie-web")
      .then((Lottie) => {
        if (!cancelled) setLottie(Lottie.default);
      })
      .catch((err) => {
        // 动画加载失败不影响页面主体渲染
        console.warn("lottie-web 加载失败，已跳过开场动画：", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/lottie/lottie.json"),
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      aria-label="Introduction"
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      style={{ opacity: 0 }}
    >
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
      <div className="flex flex-col pt-40 md:pt-0 select-none">
        <h5
          className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal`}
        >
          你好，我是
        </h5>
        <h1 className={`${styles.heroName} text-white text-6xl font-semibold`}>
          <span className={`relative ${styles.emphasize} staggered-reveal`}>
            {PERSONAL_INFO.name}
          </span>
          <span className="staggered-reveal text-2xl sm:text-3xl text-gray-light-2 ml-4 font-normal">
            / 全栈开发工程师
          </span>
        </h1>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-3 staggered-reveal text-xs sm:text-sm text-gray-light-2">
          <span className="px-3 py-1.5 rounded-full bg-gray-dark-2/80 border border-gray-dark-1 flex items-center gap-1.5 shadow-sm text-indigo-light">
            <IconLocation className="w-4 h-4 flex-shrink-0" />
            <span className="text-gray-light-2">{PERSONAL_INFO.city}</span>
          </span>
          <span className="px-3 py-1.5 rounded-full bg-gray-dark-2/80 border border-gray-dark-1 flex items-center gap-1.5 shadow-sm">
            <IconExperience className="w-4 h-4 flex-shrink-0" />
            <span>{PERSONAL_INFO.experienceYears}开发经验</span>
          </span>
          <button
            onClick={openWeChatModal}
            className="px-3 py-1.5 rounded-full bg-green/10 border border-green/30 text-green hover:bg-green/20 transition-all flex items-center gap-1.5 link cursor-pointer shadow-sm"
          >
            <IconWechat className="w-4 h-4 flex-shrink-0" />
            <span>微信: {PERSONAL_INFO.wechat} (扫码)</span>
          </button>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-full bg-gray-dark-2/80 border border-gray-dark-1 hover:border-purple transition-all flex items-center gap-1.5 link shadow-sm text-gray-light-2"
          >
            <IconGithub className="w-4 h-4 flex-shrink-0 fill-current" />
            <span>GitHub: CHN-yin</span>
          </a>
        </div>
        <p className="mt-2">
          <span
            ref={typedElementRef}
            className="staggered-reveal text-2xl sm:text-3xl text-gray-light-3 font-mono leading-relaxed"
          />
        </p>
        <div className="staggered-reveal mt-4">
          <Profiles />
        </div>
        <div className="staggered-reveal pt-6 flex flex-wrap gap-4">
          <Button href={`#${MENULINKS[4].ref}`} classes="link" type="primary">
            立即联系我
          </Button>
          <Button href={`#${MENULINKS[2].ref}`} classes="link" type="secondary">
            查看项目经验
          </Button>
        </div>
      </div>
      <div
        className="absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
        ref={lottieRef}
      />
    </section>
  );
};

export default Hero;
