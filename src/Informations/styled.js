import styled, { css } from "styled-components";
import button from "../images/button.png";
import togglemode from "../images/togglemode.png";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 0px auto;
  max-width: 1216px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    grid-template-columns: 1fr;
  }
`;
export const Image = styled.img`
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    margin-left: 16px;
    width: 132.67px;
    height: 132.67px;
  }
`;
export const ParagraphWrapper = styled.div`
  max-width: 633px;
  margin-left: 66px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    margin-left: 16px;
    margin-right: 29px;
  }
`;
export const Paragraph = styled.p`
  clear: both;
  ${(props) =>
    props.toggle &&
    css`
      width: 159px;
      height: 26px;
      background-image: url("${togglemode}");
      float: right;
      @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 16px;
      }
    `}
  ${(props) =>
    props.this &&
    css`
      color: ${({ theme }) => theme.color.slategray};
      font-weight: 700;
      font-size: 12px;
    `}
${(props) =>
    props.name &&
    css`
      color: ${({ theme }) => theme.color.mineshaft};
      font-weight: 900;
      font-size: 38px;
    `}
${(props) =>
    props.discription &&
    css`
      color: ${({ theme }) => theme.color.slategray};
      font-weight: 400;
      font-size: 20px;
    `}
${(props) =>
    props.hire &&
    css`
      width: 154px;
      height: 49px;
      background-image: url("${button}");
    `}
`;
