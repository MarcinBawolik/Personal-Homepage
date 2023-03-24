import styled, { createGlobalStyle } from "styled-components";
import { themeLight } from "./Theme/theme";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  color: ${({ theme }) => theme === themeLight ? theme.color.black : theme.color.white};
  background-color: ${({ theme }) => theme.color.mercury};
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.05em;
}
`;
export const Wrapper = styled.div`
  background-color: ${({ theme }) => (theme === themeLight ? theme.color.whitelilac : theme.color.mineshaft)};
  max-width: 1920px;
  padding-top: 100px;
  padding-bottom: 100px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    padding-top: 20px;
    padding-bottom: 30px;
  }
`;
