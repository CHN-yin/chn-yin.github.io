/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

// 图标文件名一律小写（Linux 服务器严格区分大小写）；仅文件名与技能名不同的走映射
const SKILL_ICON_MAP = {
  'ai': '/skills/ai-bot.svg',
};

const getSkillIcon = (skill) => SKILL_ICON_MAP[skill] || `/skills/${skill}.svg`;

const skillCategories = [
  {
    category: "前端架构与工程化",
    desc: "熟练掌握 HTML5、CSS3、JavaScript 与 TypeScript；熟悉 Vue3、React、Next.js、Tailwind CSS，具备高阶组件化开发、响应式布局及 SSR 服务端渲染实践经验。",
    tag: "Vue3 · React · Next.js · TypeScript · SSR",
  },
  {
    category: "出海独立站深度定制",
    desc: "熟悉 WordPress、WooCommerce、Shopify 开发，具备主题定制、插件开发、Liquid 模板研发、Hook 机制应用及多站点 REST API 对接经验。",
    tag: "WordPress · WooCommerce · Shopify · Liquid",
  },
  {
    category: "交互动画与动效编排",
    desc: "熟悉 GSAP.js 及其核心模块（Tween、Timeline、ScrollTrigger 等），具备时间轴动画编排、滚动触发动画、视差效果与复杂页面过渡交互开发经验。",
    tag: "GSAP.js · ScrollTrigger · Timeline · 视差动效",
  },
  {
    category: "服务端研发与数据建模",
    desc: "熟悉 Node.js（Koa2），具备 RESTful API 设计、中间件开发及服务端业务逻辑实现经验；熟悉 MySQL、MongoDB、Redis，具备数据建模、索引优化与缓存设计能力。",
    tag: "Node.js (Koa2) · MySQL · Redis · MongoDB",
  },
  {
    category: "AI 应用与 Agent 工作流",
    desc: "熟悉 AI 辅助编程与 Agent 工作流搭建，具备 Hermes Agent 配置、Skill 设计、知识库构建及 OpenAI、DeepSeek 等主流大模型 API 对接与业务集成经验。",
    tag: "Hermes Agent · DeepSeek API · OpenAI · 智能工作流",
  },
  {
    category: "性能优化与工程化体系",
    desc: "熟悉前端性能优化、技术 SEO 及数据埋点，具备代码分割、资源加载优化、缓存策略、结构化数据部署及用户行为追踪经验，具备 PageSpeed 90+ 优化实战经验；熟练使用 Git 协作。",
    tag: "PageSpeed 90+ · 技术 SEO · 埋点采集 · Git 协作",
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      aria-label="Skills"
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS & EXPERTISE
            </p>
            <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              专业技能
            </h2>
            <p className="text-[1.65rem] font-medium md:max-w-xl w-full mt-2 staggered-reveal">
              全栈视野与工程化思维，专注于高性能出海系统与 AI 自动化赋能。
            </p>
          </div>

          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              开发语言与工程化工具 / Languages & Tools
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.languagesAndTools.map((skill) => (
                <div key={skill} className="flex flex-col items-center group">
                  <Image
                    src={getSkillIcon(skill)}
                    alt={skill}
                    width={50}
                    height={50}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              前端、出海生态与库框架 / Frameworks & Ecosystem
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <div key={skill} className="flex flex-col items-center group">
                  <Image
                    src={getSkillIcon(skill)}
                    alt={skill}
                    width={50}
                    height={50}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6 staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                数据库 / Databases
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.databases.map((skill) => (
                  <div key={skill} className="flex flex-col items-center group">
                    <Image
                      src={getSkillIcon(skill)}
                      alt={skill}
                      width={50}
                      height={50}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="staggered-reveal mb-6">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                版本控制与前沿技术 / Others & AI
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.other.map((skill) => (
                  <div key={skill} className="flex flex-col items-center group">
                    <Image
                      src={getSkillIcon(skill)}
                      alt={skill}
                      width={50}
                      height={50}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6 Structured Skill Highlights from Latest Resume */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gray-dark-2/60 border border-gray-dark-1/80 backdrop-blur-sm staggered-reveal">
            <h4 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-light inline-block"></span>
              专业技能沉淀与业务落地矩阵
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gray-dark-3/70 border border-gray-dark-1/70 hover:border-purple/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-white text-base">
                        {item.category}
                      </h5>
                      <span className="text-xs text-indigo-light font-mono">0{index + 1}</span>
                    </div>
                    <p className="text-xs text-gray-light-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-dark-1/50">
                    <span className="text-[11px] text-gray-light-3 font-mono">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
