import { COLORS } from "modules/ui/Flex";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiUpwork, SiGmail } from "react-icons/si";

const iconProps = {
  size: 40,
  fill: COLORS.ligthGreen,
};

export const links = [
  {
    icon: <AiFillLinkedin {...iconProps} />,
    link: "https://www.linkedin.com/in/space-holder-js/",
    title: "LinkedIn",
  },
  {
    icon: <AiFillGithub {...iconProps} />,
    link: "https://github.com/SpaceHolderdJs",
    title: "Github",
  },
  {
    icon: <SiUpwork {...iconProps} />,
    link: "https://www.upwork.com/freelancers/~01fb7dc9e4b62a5a47",
    title: "Upwork",
  },
  {
    icon: <SiGmail {...iconProps} />,
    link: "mailto:sergienko339@gmail.com",
    title: "Gmail",
  },
];
