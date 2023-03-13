import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: ${({ theme }) => theme.color.mercury};
  font-family: 'Inter', sans-serif;
}
`;
export const Wrapper = styled.div`
background-color: ${({ theme }) => theme.color.whitelilac};
max-width: 1920px;
padding-top: 100px;
margin: auto;
`;