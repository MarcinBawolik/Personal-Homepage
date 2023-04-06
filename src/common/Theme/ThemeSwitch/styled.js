import styled, { css } from "styled-components";
import { ReactComponent as Sun } from "../../../images/sun.svg";

export const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ToggleButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: inherit;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    position: absolute;
    top: 22px;
    right: 18px;
  }
`;
export const Text = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;
export const IconBox = styled.span`
  background-color: ${({ theme }) => theme.colors.themeSwitch.background};
  border: solid 1px;
  border-radius: 16px;
  padding: 3px;
  width: 48px;
  display: flex;
`;

export const IconWrapper = styled.span`
  background-color: currentColor;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.5s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(Sun)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
