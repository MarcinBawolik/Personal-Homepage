import styled from "styled-components";
import { themeLight } from "../../../Theme/theme";

export const Wrapper = styled.div`
  max-width: 1216px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    grid-template-columns: 1fr;
  }
`;
export const Tile = styled.div`
  background-color: ${({ theme }) =>
    theme === themeLight ? theme.color.white : theme.color.semidark};
  border-radius: 4px;
  border: 6px solid
    ${({ theme }) =>
      theme === themeLight ? theme.color.mercury : theme.color.shuttlegray};
  padding: 56px;
  transition: border 0.5s ease-in-out;
  &:hover {
    border: 6px solid
      ${({ theme }) =>
        theme === themeLight ? theme.color.mischka : theme.color.slategray};
  }
`;

export const Header = styled.h3`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.scienceblue : theme.color.white};
  font-weight: 700;
  font-size: 24px;
`;

export const Description = styled.p`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  font-weight: 400;
  font-size: 18px;
`;
export const Text = styled.p`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.scienceblue : theme.color.white};
  font-weight: 400;
  font-size: 18px;
`;
export const Link = styled.a`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.scienceblue : theme.color.white};
  font-weight: 400;
  font-size: 18px;
`;
