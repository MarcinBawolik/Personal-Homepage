import styled from "styled-components";
import { themeLight } from "../../../../../common/Theme/theme";

export const Wrapper = styled.div`
  margin: 95px auto 140px auto;
  display: grid;
  grid-gap: 32px;
  justify-items: center;
  text-align: center;
`;

export const SubHeader = styled.h3`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.black : theme.color.white};
  font-weight: 700;
  font-size: 24px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.black : theme.color.white};
  font-weight: 400;
  font-size: 20px;
`;
export const LinkButton = styled.a`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: none;
  width: 154px;
  padding: 12px;
  border-radius: 4px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.dodgerblue};
  filter: brightness(100%);
  transition: filter 1s ease-in-out;
  &:hover {
    filter: brightness(120%);
  }
`;
