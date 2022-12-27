import { FlexRow } from "../../Flex";
import { AudioControl } from "../Audio/AudioControl";
import { MobileAlert } from "../MobileAlert/MobileAlert";
import { StyledLink } from "./styled";
import { headerLinks } from "./utils";

export const Header = () => {
  return (
    <FlexRow
      as="header"
      w="100%"
      h="10%"
      alignItems="center"
      justifyContent="space-between">
      <AudioControl />
      <FlexRow as="nav" p="20px">
        {headerLinks.map(({ title, to }) => (
          <StyledLink key={to} to={to}>
            {title}
          </StyledLink>
        ))}
      </FlexRow>
      <MobileAlert />
    </FlexRow>
  );
};
