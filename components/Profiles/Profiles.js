import { SOCIAL_LINKS } from "../../constants";
import { Icon } from "@/components/Icons";
import { openWeChatModal } from "@/components/WeChatModal/WeChatModal";
import styles from "./Profiles.module.scss";

const Profiles = () => {
  const handleClick = (e, name) => {
    if (name === "wechat") {
      e.preventDefault();
      openWeChatModal();
    }
  };

  return (
    <div className={styles.profile}>
      {SOCIAL_LINKS &&
        SOCIAL_LINKS.map(({ name, url, title }) => (
          <a
            href={name === "wechat" ? "#" : url}
            key={name}
            className="link"
            rel={name === "wechat" ? undefined : "noreferrer"}
            target={name === "wechat" ? undefined : "_blank"}
            aria-label={title || name}
            title={title || name}
            onClick={(e) => handleClick(e, name)}
          >
            <Icon name={name} />
          </a>
        ))}
    </div>
  );
};

export default Profiles;
