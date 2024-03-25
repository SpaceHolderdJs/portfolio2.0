import { FlexColumn } from "modules/ui/Flex";
import styled from "styled-components";

export const AlertWrapper = styled(FlexColumn)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
