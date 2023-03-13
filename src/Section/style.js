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
&:hover{
text-decoration: underline ${({ theme }) => theme.color.dodgerblue};
}
`;

export const SectionDivider = styled.div`
background: ${({ theme }) => theme.color.iron};
margin: 0 auto;
max-width: 1151px;
height: 1px;
&:hover{
border: 1px solid ${({ theme }) => theme.color.dodgerblue};
}
`;

export const SectionSkillWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 0px;
max-width: 1151px;
margin: 0px auto;
`;

export const SectionList = styled.ul`
color: ${({ theme }) => theme.color.dodgerblue};
margin-left: 0px;
`;

export const SectionListItem = styled.li`
color: ${({ theme }) => theme.color.slategray};
font-size: 18px;
font-weight: 400;
margin-bottom: 8px;
&:hover{
text-decoration: underline ${({ theme }) => theme.color.dodgerblue};
}
`;
