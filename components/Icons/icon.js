import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconExternal,
  IconWechat,
  IconPhone,
  IconLocation,
  IconExperience,
} from "@/components/Icons";

const Icon = ({ name, ...props }) => {
  switch (name) {
    case "mail":
      return <IconMail {...props} />;
    case "github":
      return <IconGithub {...props} />;
    case "linkedin":
      return <IconLinkedin {...props} />;
    case "instagram":
      return <IconInstagram {...props} />;
    case "twitter":
      return <IconTwitter {...props} />;
    case "wechat":
      return <IconWechat {...props} />;
    case "phone":
      return <IconPhone {...props} />;
    case "location":
    case "city":
      return <IconLocation {...props} />;
    case "experience":
      return <IconExperience {...props} />;
    default:
      return <IconExternal {...props} />;
  }
};

export default Icon;
