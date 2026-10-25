/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Fade } from "react-reveal";
import { useSfx } from "utils/use-sfx";
import Button from "../Button/Button";
import FooterBg from "./FooterBg/FooterBg";
import Profiles from "../Profiles/Profiles";
import { theme } from "tailwind.config";
import { MENULINKS } from "../../constants";

const Footer = () => {
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const sfx = useSfx();

  const handleClick = () => {
    const newRate = playbackRate + 0.1;
    sfx.play("heart", { rate: newRate });
    setPlaybackRate(newRate);
  };

  return (
    <footer
      className="w-full relative select-none bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right, ${theme.colors.indigo.light}, ${theme.colors.indigo.dark})`,
      }}
    >
      <FooterBg />
      <Fade bottom distance={"4rem"}>
        <div className="w-full h-full pt-32">
          <div className="section-container flex flex-col h-full justify-end z-10 items-center py-12">
            <p className="font-medium text-3xl md:text-4xl text-center">
              欢迎通过微信、电话或邮件与我随时沟通。
            </p>
            <div className="text-center">
              <Profiles />
            </div>
            <div className="pt-4 text-center">
              <Button
                href={`#${MENULINKS[4].ref}`}
                classes="link"
                type="secondary"
              >
                联系我 / Contact
              </Button>
            </div>
          </div>
        </div>
      </Fade>
      <img
        src="/footer-curve.svg"
        className="w-full rotate-180"
        alt="footer curve"
        loading="eager"
        height={180}
      />
    </footer>
  );
};

export default Footer;
