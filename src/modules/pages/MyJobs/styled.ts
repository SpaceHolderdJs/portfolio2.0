import { CONSTANTS } from 'modules/constants';
import { COLORS, FlexColumn } from 'modules/ui/Flex';
import { TEXT_SIZES } from 'modules/ui/Text';
import styled from 'styled-components';

export const JobModal = styled(FlexColumn)`
  border-radius: 20px;
  color: ${COLORS.ligthGreen};
  padding: 20px;
  margin: 10px;
  background: rgba(0, 0, 0, 0.7);
  overflow: auto;

  img {
    border-radius: 20px;
  }

  @media (max-width: ${CONSTANTS.mobile}) {
    width: 90%;
    justify-content: flex-start;

    .wrapper {
      flex-direction: column-reverse;

      .image-wrapper {
        width: 100%;
      }

      .article {
        width: 100%;

        .text {
          font-size: 16px;
        }
      }
    }

    .buttons-wrapper {
      flex-direction: column;
      align-items: center;

      > * {
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const HintText = styled.span`
  color: ${COLORS.ligthGreen};
  font-size: ${TEXT_SIZES.l};
  font-weight: 600;

  @media (max-width: ${CONSTANTS.mobile}) {
    font-size: 16px;
  }
`;
