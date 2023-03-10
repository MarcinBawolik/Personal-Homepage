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
position: relative;
width: 1920px;
height: 2668px;
background-color: ${({ theme }) => theme.color.whitelilac};
padding-top: 100px;
margin: auto;
`;