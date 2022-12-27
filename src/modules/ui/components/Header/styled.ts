import { COLORS } from "modules/ui/Flex";
import { TEXT_SIZES } from "modules/ui/Text";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  margin: 20px;
  color: ${COLORS.ligthGreen};
  text-decoration: none;
  font-size: ${TEXT_SIZES.l};
`;
