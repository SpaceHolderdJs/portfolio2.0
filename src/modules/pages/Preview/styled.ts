import { COLORS, FlexRow } from "modules/ui/Flex";
import { TEXT_SIZES } from "modules/ui/Text";
import styled from "styled-components";

export const StyledLinkWrapper = styled(FlexRow)`
  border-radius: 30px;
  margin: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border: 2px solid ${COLORS.ligthGreen};
  gap: 10px;

  .linkBody {
    color: ${COLORS.ligthGreen};
    font-size: ${TEXT_SIZES.l};
  }

  button {
    width: 30%;
    padding: 5px;
    border-radius: 30px;
    background: white;
    transition: 0.3s all;
    color: ${COLORS.black};
    font-size: ${TEXT_SIZES.l};
    background: ${COLORS.ligthGreen};
    cursor: pointer;
  }
`;

export const StyledImg = styled.img`
  border-radius: 50%;
  filter: saturate(0.8) brightness(90%);
  border: 2px solid ${COLORS.ligthGreen};
`;
