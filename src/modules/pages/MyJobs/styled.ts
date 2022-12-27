import { COLORS, FlexColumn } from "modules/ui/Flex";
import styled from "styled-components";

export const JobModal = styled(FlexColumn)`
  border-radius: 20px;
  color: ${COLORS.ligthGreen};
  padding: 20px;
  margin: 10px;
  background: rgba(0, 0, 0, 0.3);

  img {
    border-radius: 20px;
  }
`;
