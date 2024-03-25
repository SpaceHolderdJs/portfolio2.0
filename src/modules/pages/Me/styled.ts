import { COLORS } from 'modules/ui/Flex';
import styled from 'styled-components';
import { JobModal } from '../MyJobs/styled';
import { CONSTANTS } from 'modules/constants';

export const StyledList = styled.ul`
  li {
    color: ${COLORS.ligthGreen};

    @media (max-width: ${CONSTANTS.mobile}) {
      .text {
        font-size: 16px;
      }
    }
  }

  li::marker {
  }
`;

export const StyledBlockWrapper = styled(JobModal)`
  background: rgba(0, 0, 0, 0.6);
  flex: 1 0 auto;

  @media (max-width: ${CONSTANTS.mobile}) {
    min-height: 50%;
    font-size: 16px;
  }
`;
