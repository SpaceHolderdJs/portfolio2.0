import { FlexRow } from 'react-ui-expert';
import { MobileAlert } from '../MobileAlert/MobileAlert';
import { StyledLink } from './styled';
import { headerLinks } from './utils';

export const Header = () => {
  return (
    <FlexRow
      as="header"
      width="100%"
      height="10%"
      alignItems="center"
      justifyContent="center">
      <FlexRow as="nav" padding="20px">
        {headerLinks.map(({ title, to }) => (
          <StyledLink key={to} to={to}>
            {title}
          </StyledLink>
        ))}
      </FlexRow>
    </FlexRow>
  );
};
