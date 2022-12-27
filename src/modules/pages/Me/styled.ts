import { COLORS } from "modules/ui/Flex";
import styled from "styled-components";
import { JobModal } from "../MyJobs/styled";

export const StyledList = styled.ul`
  li {
    color: ${COLORS.ligthGreen};
  }

  li::marker {
  }
`;

export const StyledBlockWrapper = styled(JobModal)`
  background: rgba(0, 0, 0, 0.6);
`;
