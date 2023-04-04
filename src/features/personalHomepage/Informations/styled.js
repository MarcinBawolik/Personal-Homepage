import styled, { css } from "styled-components";
import { themeLight } from "../../../common/Theme/theme";
import { ReactComponent as Sun } from "../../../images/sun.svg";

export const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 0px auto;
  max-width: 1216px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    grid-template-columns: 1fr;
  }
`;
export const Image = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    margin-left: 16px;
    width: 132.67px;
    height: 132.67px;
  }
`;
export const ParagraphWrapper = styled.div`
  margin-left: 66px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    margin-left: 16px;
    margin-right: 29px;
  }
`;
export const Header = styled.h1`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.black : theme.color.white};
  font-weight: 900;
  font-size: 38px;
  margin-top: 12px;
  margin-bottom: 35px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    font-size: 22px;
  }
`;
export const Discription = styled.p`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  font-weight: 400;
  font-size: 20px;
  max-width: 576px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    font-size: 17px;
  }
`;
export const ThisIs = styled.span`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  font-weight: 700;
  font-size: 12px;
`;
export const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    position: absolute;
    top: 22px;
    right: 18px;
  }
`;
export const Text = styled.span`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    display: none;
  }
`;
export const IconBox = styled.span`
  background-color: ${({ theme }) =>
    theme === themeLight ? theme.color.iron : theme.color.slategray};
  border: solid 0.5px
    ${({ theme }) =>
      theme === themeLight ? theme.color.slategray : theme.color.white};
  border-radius: 12px;
  padding: 3px;
  width: 48px;
  display: flex;
`;

export const IconWrapper = styled.span`
  background-color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  border-radius: 50%;
  transition: transform 0.5s;
  height: 22px;
  padding: 3px;
  ${(props) =>
    props.darkThemeOn &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(Sun)`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.white : theme.color.black};
`;

export const HireMe = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: none;
  text-decoration: none;
  width: 154px;
  padding: 12px;
  margin-top: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.dodgerblue};
  filter: brightness(100%);
  transition: filter 1s ease-in-out;
  &:hover {
    filter: brightness(120%);
  }
`;
export const Envelope = styled.img`
  height: auto;
  width: 20px;
  margin-right: 16px;
`;
export const HireMeText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};
`;
