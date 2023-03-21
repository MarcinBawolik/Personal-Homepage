import styled, { css } from "styled-components";
import sun from "../images/sun.svg";
import { themeLight } from "../Theme/theme";

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
  max-width: 633px;
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
`;
export const Discription = styled.span`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  font-weight: 400;
  font-size: 20px;
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
  cursor: pointer;
  border: none;
  background-color: inherit;
`;
export const Text = styled.span`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 15px;
`;
export const IconBox = styled.div`
  width: 28px;
  background-color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.iron};
  border-radius: 4px;
`;
export const SunIcon = styled.div`
  background-image: url(${sun});
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  transition: transform 0.3s ease-in-out;
  ${(props) =>
    props.darkThemeOn &&
    css`
      transform: translateX(13px);
    `}
`;
export const HireMe = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: none;
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
