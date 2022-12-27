import { Header } from "modules/ui/components/Header/Header";
import { COLORS, FlexColumn, FlexRow } from "modules/ui/Flex";
import { TEXT_SIZES, Text, TEXT_TYPES } from "modules/ui/Text";
import { StyledLinkWrapper, StyledImg } from "./styled";
import { AiFillGithub } from "react-icons/ai";
import ReactTypingEffect from "react-typing-effect";
import { technologyNames } from "./utils";
import { appendAnimationProps } from "modules/utils/animation";
import { useRouterSwithcer } from "modules/hooks/useRouterSwithcer";

export const Preview = () => {
  useRouterSwithcer();
  return (
    <FlexColumn w="100%" h="100%" alignItems="center">
      <Header />
      <FlexColumn w="80%" h="100%" alignItems="center" justifyContent="center">
        <StyledImg width={200} height={200} src="./photos/me3.jpg" alt="me" />
        <FlexColumn
          gap="10px"
          w="50%"
          as="article"
          color={COLORS.ligthGreen}
          alignItems="center">
          <FlexRow justifyContent="center" {...appendAnimationProps}>
            <Text type={TEXT_TYPES.title} size={TEXT_SIZES.xl}>
              Igor Sergienko [SpaceHolder], <br /> web dev since 2k19
            </Text>
          </FlexRow>

          <FlexRow h="20px" m="15px">
            <ReactTypingEffect
              text={technologyNames}
              cursorClassName="cursor"
              displayTextRenderer={(text) => <Text>{text}</Text>}
            />
          </FlexRow>
        </FlexColumn>
        <StyledLinkWrapper>
          <AiFillGithub size={45} fill={COLORS.ligthGreen} />
          <FlexRow className="linkBody">
            <span>github.com/SpaceHolderdJs</span>
          </FlexRow>
          <button>Visit</button>
        </StyledLinkWrapper>
      </FlexColumn>
    </FlexColumn>
  );
};
