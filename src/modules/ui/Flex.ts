import styled from "styled-components";

export enum COLORS {
  darkBlue = "#262544",
  darkGrey = "#1b1d29",
  black = "#000000",
  ligthGreen = "#b2d1c8",
  white = "#ffffff",
}

interface DefaultElementProps {
  w?: string;
  h?: string;
  m?: string;
  mh?: string;
  p?: string;
  bg?: string;
}

interface FlexProps {
  alignItems?: string;
  justifyContent?: string;
  alignSelf?: string;
  justifySelf?: string;
  flexWrap?: string;
  gap?: string;
}

const Flex = styled.div<FlexProps & DefaultElementProps>`
  display: flex;
  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};
  margin: ${(props) => props.m || "0"};
  min-height: ${(props) => props.mh || "auto"};
  padding: ${(props) => props.p || "0"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-self: ${(props) => props.alignSelf || "none"};
  justify-self: ${(props) => props.justifySelf || "none"};
  flex-wrap: ${(props) => props.flexWrap || "none"};
  ${({ gap }) => gap && `gap: ${gap};`};
  background: ${({ bg }) => bg || "none"};
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;
