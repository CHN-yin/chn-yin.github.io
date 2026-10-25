import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";

// Map tech names to their icon file paths (some are PNG, rest are SVG)
const TECH_ICON_MAP = {
  'ai': '/projects/tech/ai.svg',
  'echarts': '/projects/tech/echarts.svg',
  'gsap': '/projects/tech/gsap.svg',
  'redis': '/projects/tech/redis.svg',
  'shopify': '/projects/tech/shopify.svg',
  'wordpress': '/projects/tech/wordpress.svg',
};

const getTechIcon = (tech) => TECH_ICON_MAP[tech] || `/projects/tech/${tech}.svg`;

const tiltOptions = {
  max: 12,
  speed: 600,
  glare: true,
  "max-glare": 0.35,
  scale: 1.02,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const projectCard = useRef(null);

  const { name, description, gradient, url, tech } = project;

  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  useEffect(() => {
    const node = projectCard.current;
    VanillaTilt.init(node, tiltOptions);
    return () => node?.vanillaTilt?.destroy();
  }, []);

  return (
    <a
      href={url || undefined}
      className={`overflow-hidden rounded-3xl snap-start link ${additionalClasses}`}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.projectTile} rounded-3xl relative p-6 sm:p-8 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt=""
          className="absolute w-full h-full top-0 left-0 opacity-20 rounded-3xl pointer-events-none"
          fill
        />
        <div className="z-10 flex flex-col gap-4">
          <h3
            className={`${styles.projectTitle} font-bold text-2xl sm:text-3xl pl-1 pt-1 transform-gpu`}
          >
            {name}
          </h3>
          <div className={`${styles.techWrapper} flex flex-wrap items-center gap-3 pl-1 pt-1 z-10 transform-gpu`}>
            {tech.map((el) => (
              <div
                key={el}
                className={`${styles.techBadge} w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/35 backdrop-blur-md border border-white/20 flex items-center justify-center p-2`}
                title={el}
              >
                <Image
                  src={getTechIcon(el)}
                  alt={el}
                  height={28}
                  width={28}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.descPlate} p-4 sm:p-5 rounded-2xl z-10 transform-gpu mt-4`}>
          <p
            className={`${styles.descText} text-sm sm:text-base tracking-wide font-normal text-white/95 leading-relaxed m-0`}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectTile;
