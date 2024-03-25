import { Header } from 'modules/ui/components/Header/Header';
import { COLORS } from 'modules/ui/Flex';
import { TEXT_SIZES, Text, TEXT_TYPES } from 'modules/ui/Text';
import { StyledImg, StyledCustomLinkWrapper } from './styled';
import { AiFillGithub } from 'react-icons/ai';
import ReactTypingEffect from 'react-typing-effect';
import { technologyNames } from './utils';
import { appendAnimationProps } from 'modules/utils/animation';
import { useRouterSwithcer } from 'modules/hooks/useRouterSwithcer';
import { FlexColumn, FlexRow } from 'react-ui-expert';

export const Preview = () => {
  useRouterSwithcer();
  return (
    <FlexColumn width="100%" height="100%" alignItems="center">
      <Header />
      <FlexColumn
        width="80%"
        height="100%"
        alignItems="center"
        justifyContent="center">
        <StyledImg width={200} height={200} src="./photos/me3.jpg" alt="me" />
        <FlexColumn
          gap="10px"
          width="50%"
          minWidth="300px"
          as="article"
          color={COLORS.ligthGreen}
          alignItems="center">
          <FlexRow justifyContent="center" {...appendAnimationProps}>
            <Text
              type={TEXT_TYPES.title}
              size={TEXT_SIZES.xl}
              textAlign="center">
              Igor Sergienko [SpaceHolder], <br /> web dev since 2k19
            </Text>
          </FlexRow>

          <FlexRow height="20px" margin="15px">
            <ReactTypingEffect
              text={technologyNames}
              cursorClassName="cursor"
              displayTextRenderer={(text) => <Text>{text}</Text>}
            />
          </FlexRow>
        </FlexColumn>
        <StyledCustomLinkWrapper>
          <AiFillGithub size={45} fill={COLORS.ligthGreen} />
          <FlexRow className="linkBody">
            <span>github.com/SpaceHolderdJs</span>
          </FlexRow>
          <button>Visit</button>
        </StyledCustomLinkWrapper>
      </FlexColumn>
    </FlexColumn>
  );
};
