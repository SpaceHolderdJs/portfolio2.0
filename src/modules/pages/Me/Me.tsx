import { Header } from 'modules/ui/components/Header/Header';
import { TEXT_TYPES, TEXT_SIZES, Text } from 'modules/ui/Text';
import { appendAnimationProps } from 'modules/utils/animation';
import ReactTypingEffect from 'react-typing-effect';
import { StyledBlockWrapper, StyledList } from './styled';
import { topics } from './utils';
import { useRouterSwithcer } from 'modules/hooks/useRouterSwithcer';
import { FlexColumn } from 'react-ui-expert';

export const Me = () => {
  useRouterSwithcer();
  return (
    <FlexColumn width="100%" height="100%" alignItems="center">
      <Header />
      <FlexColumn alignItems="center" width="90%" height="100%" overflow="auto">
        {topics.map(({ title, text, list }, i) => (
          <StyledBlockWrapper
            key={`blick-${i}`}
            w="90%"
            {...{ ...appendAnimationProps, duration: i + 0.5 }}>
            <Text type={TEXT_TYPES.title} size={TEXT_SIZES.xl} m="15px 0">
              <ReactTypingEffect
                eraseDelay={Date.now()}
                text={title}
                cursorClassName="cursor"
                displayTextRenderer={(t) => <span>{t}</span>}
              />
            </Text>
            <Text className="text">{text}</Text>
            {list && (
              <StyledList>
                {list.map((text) => (
                  <li>
                    <Text>{text}</Text>
                  </li>
                ))}
              </StyledList>
            )}
          </StyledBlockWrapper>
        ))}
      </FlexColumn>
    </FlexColumn>
  );
};
