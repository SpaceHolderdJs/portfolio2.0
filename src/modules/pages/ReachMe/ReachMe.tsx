import { useRouterSwithcer } from "modules/hooks/useRouterSwithcer";
import { FlexColumn, FlexRow } from "modules/ui/Flex";
import { Header } from "modules/ui/components/Header/Header";
import { links } from "./utils";
import { StyledLinkWrapper } from "../Preview/styled";
import { motion } from "framer-motion";

export const ReachMe = () => {
  useRouterSwithcer();

  const onButtonClick = (link: string) => {
    window.open(link);
  };

  return (
    <FlexColumn w="100%" h="100%" alignItems="center">
      <Header />
      <FlexColumn w="70%" h="100%" alignItems="center" justifyContent="center">
        {links.map(({ icon, link, title }, i) => (
          <StyledLinkWrapper
            key={`link-${i}`}
            w="300px"
            as={motion.div}
            animate={{ opacity: [0, 1], y: [500, 0] }}
            transition={{ duration: 1, delay: 0.5 + i * 0.5 }}>
            {icon}
            <FlexRow className="linkBody">
              <span>{title}</span>
            </FlexRow>
            <button onClick={() => onButtonClick(link)}>Visit</button>
          </StyledLinkWrapper>
        ))}
      </FlexColumn>
    </FlexColumn>
  );
};
