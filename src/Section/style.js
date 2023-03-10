import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  width: 1216px;
  height: 404px;
  border-radius: 4px;
  margin: 63px 350px 72px 354px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
              0px 16px 58px rgba(9, 10, 51, 0.03);
              /* &:hover{
border: 1px solid ${({ theme }) => theme.color.dodgerblue};
margin: 62px 349px 71px 353px;
} */
              ${(props) => props.short && css`
  height: 209px;
  margin-top: 564px;
  `}            
`;
export const SectionHeader = styled.h2`
color: ${({ theme }) => theme.color.black};
font-weight: 900;
font-size: 30px;
width: 350px;
height: 36px;
text-align: center;
padding-top: 32px;
margin-left: 32px;
padding-bottom: 15px;

&:hover{
text-decoration: underline ${({ theme }) => theme.color.dodgerblue};
}
`;
export const SectionDivider = styled.div`
margin-left: 32.5px;
margin-right: 32.5px ;
width: 1151px;
height: 1px;
background: ${({ theme }) => theme.color.iron};

&:hover{
border: 1px solid ${({ theme }) => theme.color.dodgerblue};
margin: -0.5px 31.5px -0.5px 31.5px;
}
`;
export const SectionSkillWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
width: 1151px;
height: 256px;
margin-top: 32px;
margin-bottom: 32px;
`;
export const SectionList = styled.ul`
margin-left: 52.5px;
padding-left: 0px;
color: ${({ theme }) => theme.color.dodgerblue};
`;
export const SectionListItem = styled.li`
color: ${({ theme }) => theme.color.slategray};
font-size: 18px;
font-weight: 400;
margin-bottom: 8px;
white-space: nowrap;

&:hover{
text-decoration: underline ${({ theme }) => theme.color.dodgerblue};
}
`;
