import styled, { css } from "styled-components";
import hireMeButton from "../images/hireMeButton.svg";
import sun from "../images/sun.svg";

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
export const Header = styled.h1`
  color: ${({ theme }) => theme.color.mineshaft};
  font-weight: 900;
  font-size: 38px;
  margin-top: 12px;
  margin-bottom: 35px;
`;
export const Discription = styled.span`
  color: ${({ theme }) => theme.color.slategray};
  font-weight: 400;
  font-size: 20px;
`;
export const ThisIs = styled.span`
  color: ${({ theme }) => theme.color.slategray};
  font-weight: 700;
  font-size: 12px;
`;
export const HireButton = styled.button`
  width: 154px;
  height: 49px;
  background-image: url("${hireMeButton}");
  border: none;
  display: block;
  margin-top: 32px;
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
  color: ${({ theme }) => theme.color.slategray};
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 15px;
`;
export const IconBox = styled.div`
  width: 28px;
  background-color: ${({ theme }) => theme.color.slategray};
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
    props.isClicked &&
    css`
      transform: translateX(13px);
    `}
`;
