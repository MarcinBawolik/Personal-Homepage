import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Inter', sans-serif;
  transition: background 0.5s;
  color: ${({ theme }) => theme.colors.site.text};
  background-color: ${({ theme }) => theme.colors.site.background};
  font-size: 18px;
  letter-spacing: 0.05em;
  word-break: break-word;
  overflow-y: scroll;
  padding-bottom: 108px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 32px;
  }
}
`;
