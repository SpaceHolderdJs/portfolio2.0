import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS } from './Flex';

export const enum TEXT_TYPES {
  title = 'TITLE',
  text = 'TEXT',
}

export enum TEXT_SIZES {
  s = '15px',
  l = '20px',
  xl = '35px',
}

export const enum TEXT_WEIGHTS {
  tiny = '200',
  bold = '600',
  bolder = '900',
}

interface Props {
  type?: TEXT_TYPES;
  color?: COLORS;
  weight?: TEXT_WEIGHTS;
  size?: TEXT_SIZES;
  children?: ReactNode;
  m?: string;
  textAlign?: string;
  className?: string;
}

const StyledTitle = styled.h2<Props>`
  font-size: ${({ size }) => size || TEXT_SIZES.xl};
  font-weight: ${({ weight }) => weight || TEXT_WEIGHTS.bold};
  color: ${({ color }) => color || COLORS.ligthGreen};
  margin: ${({ m }) => m || 10};
  text-align: ${({ textAlign }) => textAlign || 'start'};
`;

const StyledText = styled.span<Props>`
  font-size: ${({ size }) => size || TEXT_SIZES.l};
  color: ${({ color }) => color || COLORS.ligthGreen};
  font-weight: ${({ weight }) => weight || TEXT_WEIGHTS.bold};
  margin: ${({ m }) => m || 10};
  text-align: ${({ textAlign }) => textAlign || 'start'};
  line-height: 30px;
`;

export const Text: FC<Props> = ({
  type = TEXT_TYPES.text,
  color = COLORS.ligthGreen,
  weight = TEXT_WEIGHTS.bold,
  size = TEXT_SIZES.l,
  children = null,
  className = '',
  m,
  textAlign,
}) => {
  if (type === TEXT_TYPES.title) {
    return (
      <StyledTitle
        className={className}
        color={color}
        weight={weight}
        size={size}
        m={m}
        textAlign={textAlign}>
        {children}
      </StyledTitle>
    );
  }

  if (type === TEXT_TYPES.text) {
    return (
      <StyledText
        className={className}
        color={color}
        weight={weight}
        size={size}
        m={m}
        textAlign={textAlign}>
        {children}
      </StyledText>
    );
  }

  return null;
};
