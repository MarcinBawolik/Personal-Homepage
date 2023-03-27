import styled from "styled-components";
import { themeLight } from "../../../../../Theme/theme";

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
  transition: background-color 0.5s;
  border-radius: 4px;
  border: 6px solid
    ${({ theme }) =>
      theme === themeLight ? theme.color.mercury : theme.color.shuttlegray};
  padding: 56px;
  transition: border 0.5s;
  &:hover {
    border: 6px solid
      ${({ theme }) =>
        theme === themeLight ? theme.color.mischka : theme.color.slategray};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    padding: 24px;
  }
`;

export const Header = styled.h3`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.scienceblue : theme.color.white};
  font-weight: 700;
  font-size: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  font-weight: 400;
  font-size: 18px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    font-size: 14px;
  }
`;

export const LinkAndTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  font-weight: 400;
  font-size: 18px;
  margin-right: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    font-size: 14px;
  }
`;
export const Link = styled.a`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.scienceblue : theme.color.white};
  font-weight: 400;
  font-size: 18px;
  text-decoration-color: rgba(3, 102, 214, 0.2);
  word-break: break-all;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    font-size: 14px;
  }
`;
