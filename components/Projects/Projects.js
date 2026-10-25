import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";

const Projects = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    let projectsScrollTrigger;
    let projectsTimeline;
    const sectionEl = sectionRef.current;

    if (isDesktop) {
      [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
    } else {
      const projectWrapper =
        sectionEl.querySelector(".project-wrapper");
      projectWrapper.style.width = "calc(100vw - 1rem)";
      projectWrapper.style.overflowX = "scroll";
    }

    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
      if (sectionEl) {
        sectionEl.style.width = "";
        sectionEl.style.maxWidth = "";
      }
    };
  }, [sectionRef, sectionTitleRef, isDesktop]);

  const getRevealSt = () => {
    const revealTl = gsap.timeline({ defaults: { ease: "none" } });

    revealTl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const getProjectsSt = () => {
    const timeline = gsap.timeline({ defaults: { ease: "none" } });
    const sectionEl = sectionRef.current;
    const innerContainer = sectionEl.querySelector(".inner-container");
    const projectWrapper = sectionEl.querySelector(".project-wrapper");

    // 每次刷新前重置内联尺寸，基于当前视口 / 字体真实测量，
    // 否则字体异步加载或窗口缩放后测量值过期，最后一张卡片会滚不完整
    const measure = () => {
      sectionEl.style.width = "";
      sectionEl.style.maxWidth = "none";
      projectWrapper.style.width = "max-content";
      projectWrapper.style.maxWidth = "none";

      const sidePadding = Math.max(
        document.body.clientWidth - innerContainer.clientWidth,
        120
      );
      const leftOffset = sidePadding / 2;

      // 所有项目卡片的总宽度（含间距）
      const wrapperWidth = projectWrapper.scrollWidth;

      // 最后一张卡片滚入后留出的缓冲
      const endBuffer = Math.max(leftOffset, 120);

      const elementWidth = leftOffset + wrapperWidth + endBuffer;
      sectionEl.style.width = `${elementWidth}px`;
      return elementWidth;
    };

    measure();

    // 函数式取值 + invalidateOnRefresh：窗口缩放 / 字体加载后刷新时重新计算
    timeline
      .to(sectionEl, { x: () => window.innerWidth - measure() })
      .to(sectionTitleRef.current, { x: () => -(window.innerWidth - measure()) }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionEl,
      start: "top top",
      end: () => `${(measure() / window.innerHeight) * 100}%`,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
      invalidateOnRefresh: true,
    });

    // 字体异步加载会改变卡片宽度，字体就绪后重新测量
    if (typeof document.fonts !== "undefined" && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return [timeline, scrollTrigger];
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      aria-label="Projects"
      className={`${
        isDesktop && "min-h-screen"
      } w-full relative select-none section-container transform-gpu`}
    >
      <div className="flex flex-col justify-center h-full">
        <div
          className="flex flex-col inner-container transform-gpu"
          ref={sectionTitleRef}
        >
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            PROJECTS
          </p>
          <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            项目经验
          </h2>
          <p className="text-[1.65rem] font-medium md:max-w-xl max-w-sm mt-2 staggered-reveal">
            核心项目与商业化落地实践，涵盖出海独立站矩阵、运营数据中台与 AI 自动化系统。{" "}
          </p>
        </div>
        <div
          className={`${
            clientHeight > 650 ? "mt-12" : "mt-8"
          } flex project-wrapper no-scrollbar w-fit staggered-reveal`}
        >
          {PROJECTS.map((project, index) => (
            <ProjectTile
              classes={
                index === PROJECTS.length - 1 ? "" : "mr-8 xs:mr-10 sm:mr-12"
              }
              project={project}
              key={project.name}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
