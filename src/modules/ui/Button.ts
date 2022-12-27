import styled from "styled-components";
import { COLORS } from "./Flex";

interface Props {
  color?: string;
}

export const Buttton = styled.button<Props>`
  border: none;
  border-radius: 20px;
  background: ${COLORS.darkGrey};
  outline: none;
  color: ${({ color }) => color || COLORS.white};
  margin: 10px;
  padding: 10px;
  transition: 0.3s all;
  cursor: pointer;
  min-width: 150px;
  transition: 0.3s all;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  & .icon {
    border-radius: 50%;
    border: 1px solid ${COLORS.ligthGreen};
  }

  &:hover {
    transform: scale(1.1);
    /* background: ${COLORS.ligthGreen}; */
    color: ${COLORS.white};
    border: 1px solid ${COLORS.ligthGreen};
  }
`;
