import { Header } from "modules/ui/components/Header/Header";
import { FlexColumn } from "modules/ui/Flex";
import { TEXT_TYPES, TEXT_SIZES, Text } from "modules/ui/Text";
import { appendAnimationProps } from "modules/utils/animation";
import ReactTypingEffect from "react-typing-effect";
import { StyledBlockWrapper, StyledList } from "./styled";
import { topics } from "./utils";
import { useRouterSwithcer } from "modules/hooks/useRouterSwithcer";

export const Me = () => {
  useRouterSwithcer();
  return (
    <FlexColumn w="100%" h="100%" alignItems="center">
      <Header />
      <FlexColumn
        alignItems="center"
        w="80%"
        h="100%"
        style={{ overflow: "auto" }}>
        {topics.map(({ title, text, list }, i) => (
          <StyledBlockWrapper
            key={`blick-${i}`}
            w="90%"
            justifyContent="center"
            {...{ ...appendAnimationProps, duration: i + 0.5 }}>
            <Text type={TEXT_TYPES.title} size={TEXT_SIZES.xl} m="15px 0">
              <ReactTypingEffect
                eraseDelay={Date.now()}
                text={title}
                cursorClassName="cursor"
                displayTextRenderer={(t) => <span>{t}</span>}
              />
            </Text>
            <Text>{text}</Text>
            {list && (
              <StyledList>
                {list.map((text) => (
                  <li>
                    <Text>{text}</Text>
                  </li>
                ))}
              </StyledList>
            )}
            {/* <Text size={TEXT_SIZES.l}>{text}</Text> */}
          </StyledBlockWrapper>
        ))}
      </FlexColumn>
    </FlexColumn>
  );
};
