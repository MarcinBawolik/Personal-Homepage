import styled, { css } from "styled-components";
import shape from "../images/shape.png";
import { themeLight } from "../Theme/theme";

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 0px auto 120px auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;
export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  margin: 0px auto 24px auto;
`;
export const HeaderParagraph = styled.p`
  ${(props) =>
    props.image &&
    css`
      width: 40px;
      height: 39.01px;
      background-image: url("${shape}");
      margin: 0px auto;
    `}
  ${(props) =>
    props.title &&
    css`
      color: ${({ theme }) =>
        theme === themeLight ? theme.color.black : theme.color.white};
      font-weight: 900;
      font-size: 30px;
      margin: 12.99px auto 8px auto;
    `}
${(props) =>
    props.subtitle &&
    css`
      color: ${({ theme }) =>
        theme === themeLight ? theme.color.mineshaft : theme.color.white};
      font-weight: 400;
      font-size: 20px;
      margin: 0px auto 24px auto;
    `}
`;
