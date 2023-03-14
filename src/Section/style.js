import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  max-width: 1216px;
  border-radius: 4px;
  margin: 72px auto;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-weight: 900;
  font-size: 30px;
  text-align: left;
  margin: 0 auto;
  &:hover {
    text-decoration: underline ${({ theme }) => theme.color.dodgerblue};
  }
`;

export const SectionDivider = styled.div`
  background: ${({ theme }) => theme.color.iron};
  margin: 18px auto 32px auto;
  max-width: 1151px;
  height: 1px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.dodgerblue};
  }
`;

export const SectionSkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0px;
  max-width: 1151px;
  margin: 0px auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px)
{
    grid-template-columns: 1fr;
}
`;

export const SectionList = styled.ul`
  color: ${({ theme }) => theme.color.dodgerblue};
  margin-left: 0px;
  list-style: none;
`;

export const SectionListItem = styled.li`
  color: ${({ theme }) => theme.color.slategray};
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  &:hover {
    text-decoration: underline ${({ theme }) => theme.color.dodgerblue};
  }
`;

export const LiWrapper = styled.div`
display: flex;
align-items: center;
`;

export const LiBullet = styled.div`
    width: 9px;
    height: 9px;
    border-radius: 4.5px;
    background-color: ${({ theme }) => theme.color.scienceblue};
    margin-right: 16px;

    &:hover{
      filter: brightness(120%);
    }
`;