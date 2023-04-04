import styled, { css } from "styled-components";
import { themeLight } from "../../../Theme/theme";
import { ReactComponent as Github } from "../../../images/github.svg";
import { ReactComponent as Linkedin } from "../../../images/linkedin.svg";

export const Wrapper = styled.footer`
  max-width: 1216px;
  margin: 0px auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Paragraph = styled.p`
  ${(props) =>
    props.talk &&
    css`
      color: ${({ theme }) =>
        theme === themeLight ? theme.color.slategray : theme.color.white};
      font-weight: 700;
      font-size: 12px;
    `};
  ${(props) =>
    props.email &&
    css`
      color: ${({ theme }) =>
        theme === themeLight ? theme.color.black : theme.color.white};
      font-weight: 900;
      font-size: 32px;
      transition: color 0.5s ease-in-out;
      &:hover {
        color: ${({ theme }) => theme.color.scienceblue};
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
        font-size: 18px;
      }
    `};
  ${(props) =>
    props.content &&
    css`
      color: ${({ theme }) =>
        theme === themeLight ? theme.color.black : theme.color.white};
      font-weight: 400;
      font-size: 18px;
      max-width: 691px;
      @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
        font-size: 14px;
      }
    `};
`;

export const ImageWrapper = styled.a`
  margin-right: 24px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.black : theme.color.white};
  transition: color 1s;
  &:hover {
    color: ${({ theme }) => theme.color.scienceblue};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    margin-right: 16px;
  }
`;

export const StyledGithub = styled(Github)`
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    width: 32px;
    height: 32px;
  }
`;
export const StyledLinkedin = styled(Linkedin)`
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    width: 32px;
    height: 32px;
  }
`;
