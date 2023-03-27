import styled, { css } from "styled-components";
import { themeLight } from "../../../Theme/theme";

export const StyledSection = styled.section`
  background-color: ${({ theme }) =>
    theme === themeLight ? theme.color.white : theme.color.semidark};
  transition: background-color 0.5s;
  max-width: 1216px;
  border-radius: 4px;
  margin: 72px auto;
  padding: 32px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    margin-left: 14px;
    margin-right: 14px;
    padding: 16px;
  }
`;

export const SectionHeader = styled.h2`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.black : theme.color.white};
  font-weight: 900;
  font-size: 30px;
  text-align: left;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    font-size: 18px;
  }
`;

export const SectionDivider = styled.div`
  background: ${({ theme }) =>
    theme === themeLight ? theme.color.iron : theme.color.mischka};
  max-width: 1151px;
  height: 1px;
`;

export const SectionSkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0px;
  max-width: 1151px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionList = styled.ul`
  margin-left: -36px;
  list-style: none;
  ${(props) =>
    props.top &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
        margin-bottom: 0px;
      }
    `};
  ${(props) =>
    props.middle &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    `};
  ${(props) =>
    props.bottom &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
        margin-top: 0px;
      }
    `};
`;

export const SectionListItem = styled.li`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.slategray : theme.color.white};
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    font-size: 14px;
  }
`;

export const LiWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LiBullet = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.scienceblue};
  margin-right: 16px;
`;
