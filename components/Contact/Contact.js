import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Fade from "react-reveal/Fade";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useSfx } from "utils/use-sfx";
import mail from "./mailer";
import styles from "./Contact.module.scss";
import { MENULINKS, PERSONAL_INFO } from "../../constants";
import { openWeChatModal } from "@/components/WeChatModal/WeChatModal";
import { Icon, IconWechat, IconLocation } from "@/components/Icons";

const toastOptions = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontFamily: "sans-serif",
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const success = () =>
  toast.success("发送成功，感谢你的留言，我会尽快回复！", {
    id: "success",
  });

const sendError = () =>
  toast.error(
    <span>
      发送失败，请稍后重试，或
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="underline font-medium"
        style={{ color: "#9ed1ff" }}
      >
        直接发邮件给我
      </a>
    </span>,
    { id: "error", duration: 6000 }
  );

const Contact = () => {
  const initialState = { name: "", email: "", message: "", honey: "" };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const buttonElementRef = useRef(null);
  const playSendAnimationRef = useRef(null);
  const sectionRef = useRef(null);
  const sfx = useSfx();

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData((prevVal) => ({ ...prevVal, [id]: value }));
    // 输入即清除该字段的错误提示
    setErrors((prev) => (prev[id] ? { ...prev, [id]: undefined } : prev));
  };

  const emptyForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  const validate = () => {
    const errs = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    if (name.length < 2 || name.length > 30) {
      errs.name = "请填写姓名（2~30 个字符）";
    }
    if (!EMAIL_RE.test(email)) {
      errs.email = "请填写有效的邮箱地址";
    }
    if (message.length < 5) {
      errs.message = "留言内容至少 5 个字";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).some((key) => errs[key])) {
      toast.error("请检查表单填写", { id: "error" });
      return;
    }

    sfx.play("charge-up", { rate: 2 });
    playSendAnimationRef.current?.();
    setSending(true);

    // 蜜罐命中：机器人填写，静默假成功、不实际发送
    if (formData.honey) {
      success();
      emptyForm();
      setSending(false);
      return;
    }

    mail({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    })
      .then((res) => {
        if (res && res.status === 200) {
          success();
          emptyForm();
        } else {
          sendError();
        }
      })
      .catch(() => sendError())
      .finally(() => setSending(false));
  };

  useEffect(() => {
    const handleButtonClick = (e) => {
      if (!buttonElementRef.current.classList.contains("active")) {
        buttonElementRef.current.classList.add("active");

        gsap.to(buttonElementRef.current, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(buttonElementRef.current, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 60,
              "--plane-x": -8,
              "--plane-y": 40,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -300,
              "--plane-opacity": 0,
              duration: 0.375,
              onComplete() {
                setTimeout(() => {
                  buttonElementRef.current.removeAttribute("style");
                  gsap.fromTo(
                    buttonElementRef.current,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        buttonElementRef.current.classList.remove("active");
                      },
                    },
                  );
                }, 1800);
              },
            },
          ],
        });

        gsap.to(buttonElementRef.current, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--border-radius": 0,
              "--left-wing-background": "#3a8fd4",
              "--right-wing-background": "#3a8fd4",
              duration: 0.11,
            },
            {
              "--left-wing-background": "#1a5fa8",
              "--right-wing-background": "#1a5fa8",
              duration: 0.14,
            },
            {
              "--left-body-background": "#3a8fd4",
              "--right-body-background": "#3a8fd4",
              duration: 0.25,
              delay: 0.1,
            },
            {
              "--trails-stroke": 171,
              duration: 0.22,
              delay: 0.22,
            },
            {
              "--success-opacity": 1,
              "--success-x": 0,
              duration: 0.2,
              delay: 0.15,
            },
            {
              "--success-stroke": 0,
              duration: 0.15,
            },
          ],
        });
      }
    };

    playSendAnimationRef.current = handleButtonClick;
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<",
    );

    const st = ScrollTrigger.create({
      trigger: sectionRef.current.querySelector(".contact-wrapper"),
      start: "100px bottom",
      end: "center center",
      scrub: 0,
      animation: tl,
    });

    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      aria-label="Contact"
      className="mt-30 w-full relative select-none bg-black pt-20 sm:pt-10 md:pt-5 lg:pt-1 pb-20"
    >
      <div>
        <Toaster toastOptions={toastOptions} />
      </div>
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col contact-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              CONTACT
            </p>
            <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              联系方式
            </h2>
          </div>
          <p className="text-[1.65rem] font-medium md:max-w-xl w-full mt-2 staggered-reveal">
            欢迎交流探讨，期待加入优秀团队共创价值。{" "}
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-8 staggered-reveal">
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="p-4 rounded-xl bg-gray-dark-2/70 border border-gray-dark-1/80 flex items-center gap-3 hover:border-purple transition-colors link group"
          >
            <div className="w-10 h-10 rounded-full bg-gray-dark-1/60 flex items-center justify-center text-indigo-light flex-shrink-0 group-hover:bg-purple/20 transition-colors">
              <Icon name="phone" />
            </div>
            <div>
              <div className="text-xs text-gray-light-2">联系电话</div>
              <div className="text-sm font-mono text-white font-medium">{PERSONAL_INFO.phone}</div>
            </div>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-4 rounded-xl bg-gray-dark-2/70 border border-gray-dark-1/80 flex items-center gap-3 hover:border-purple transition-colors link group"
          >
            <div className="w-10 h-10 rounded-full bg-gray-dark-1/60 flex items-center justify-center text-indigo-light flex-shrink-0 group-hover:bg-purple/20 transition-colors">
              <Icon name="mail" />
            </div>
            <div>
              <div className="text-xs text-gray-light-2">电子邮箱</div>
              <div className="text-sm font-mono text-white font-medium truncate max-w-[130px] xl:max-w-[150px]">
                {PERSONAL_INFO.email}
              </div>
            </div>
          </a>
          <button
            type="button"
            onClick={openWeChatModal}
            className="p-4 rounded-xl bg-gray-dark-2/70 border border-gray-dark-1/80 flex items-center gap-3 hover:border-green transition-colors text-left link group"
          >
            <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-green flex-shrink-0 group-hover:bg-green/20 transition-colors">
              <IconWechat className="w-5 h-5 flex-shrink-0 fill-current" />
            </div>
            <div>
              <div className="text-xs text-green flex items-center gap-1 font-medium">
                微信联系 · 点击查看二维码
              </div>
              <div className="text-sm font-mono text-white font-medium group-hover:text-green transition-colors">
                {PERSONAL_INFO.wechat}
              </div>
            </div>
          </button>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-xl bg-gray-dark-2/70 border border-gray-dark-1/80 flex items-center gap-3 hover:border-purple transition-colors link group"
          >
            <div className="w-10 h-10 rounded-full bg-gray-dark-1/60 flex items-center justify-center text-indigo-light flex-shrink-0 group-hover:bg-purple/20 transition-colors">
              <Icon name="github" />
            </div>
            <div>
              <div className="text-xs text-gray-light-2">GitHub 主页</div>
              <div className="text-sm font-mono text-white font-medium">CHN-yin</div>
            </div>
          </a>
          <div className="p-4 rounded-xl bg-gray-dark-2/70 border border-gray-dark-1/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-dark-1/60 flex items-center justify-center text-indigo-light flex-shrink-0">
              <IconLocation className="w-5 h-5 flex-shrink-0" />
            </div>
            <div>
              <div className="text-xs text-gray-light-2">所在城市 / 工作年限</div>
              <div className="text-sm font-medium text-white">{PERSONAL_INFO.city} · {PERSONAL_INFO.experienceYears}</div>
            </div>
          </div>
        </div>

        <form className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem] staggered-reveal" noValidate>
          <Fade bottom distance={"4rem"}>
            {/* 蜜罐字段：对用户不可见，机器人填写的提交会被 FormSubmit 静默丢弃 */}
            <input
              type="text"
              id="honey"
              value={formData.honey}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="relative">
              <input
                type="text"
                id="name"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                value={formData.name}
                onChange={handleChange}
                maxLength={30}
                required
              />
              <label
                htmlFor="name"
                className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                姓名 / Name
              </label>
              {errors.name && (
                <p className="text-xs text-red mt-1 pl-1">{errors.name}</p>
              )}
            </div>

            <div className="relative mt-14">
              <input
                type="email"
                id="email"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                value={formData.email}
                onChange={handleChange}
                maxLength={50}
                required
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                邮箱 / Email
              </label>
              {errors.email && (
                <p className="text-xs text-red mt-1 pl-1">{errors.email}</p>
              )}
            </div>

            <div className="relative mt-14">
              <textarea
                id="message"
                className="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                required
              />
              <label
                htmlFor="message"
                className="absolute top-0 left-0 h-14 flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                留言内容 / Message
              </label>
              {errors.message && (
                <p className="text-xs text-red mt-1 pl-1">{errors.message}</p>
              )}
            </div>
          </Fade>
        </form>
        <div className="mt-9 mx-auto link">
          <button
            ref={buttonElementRef}
            className={styles.button}
            disabled={
              sending ||
              formData.name === "" ||
              formData.email === "" ||
              formData.message === ""
                ? true
                : false
            }
            onClick={handleSubmit}
          >
            <span>发送 -&gt;</span>
            <span className={styles.success}>
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              已发送
            </span>
            <svg className={styles.trails} viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className={styles.plane}>
              <div className={styles.left} />
              <div className={styles.right} />
            </div>
          </button>
        </div>
      </div>
      <style jsx global>{`
        input,
        label,
        textarea {
          cursor: none;
        }

        input:hover,
        textarea:hover {
          box-shadow: 0 0 0.3rem #1a5fa8;
        }

        input:active,
        input:focus,
        textarea:active,
        textarea:focus {
          box-shadow: 0 0 0.3rem #000000;
        }

        input:focus + label,
        input:valid + label {
          height: 50%;
          padding-left: 0;
          transform: translateY(-100%);
        }

        textarea:focus + label,
        textarea:valid + label {
          height: 17%;
          padding-left: 0;
          transform: translateY(-100%);
        }
      `}</style>
    </section>
  );
};

export default Contact;
