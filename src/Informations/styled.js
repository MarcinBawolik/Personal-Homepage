import styled, {css} from "styled-components";
import me from "../images/me.jpg"
import button from "../images/button.png"

export const Wrapper = styled.div`
display: grid;
grid-template-columns: auto 1fr;
margin: 63px 350px 72px 354px;
`;
export const Image = styled.div`
width: 398px;
height: 398px;
border-radius: 50%;
background-image: url("${me}");
`;
export const ParagraphWrapper = styled.div`
width: 633px;
height: 247px;
margin-left: 66px;
`;
export const Paragraph = styled.p`

${(props) => props.this && css`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.color.slategray};
`}
${(props) => props.name && css`
font-weight: 900;
font-size: 38px;
line-height: 46px;
color: ${({ theme }) => theme.color.mineshaft};
`}
${(props) => props.discription && css`
font-weight: 400;
font-size: 20px;
color: ${({ theme }) => theme.color.slategray};
`}
${(props) => props.hire && css`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 16px;
position: absolute;
width: 154px;
height: 49px;
left: 809px;
top: 381px;
background-image: url("${button}");
`}
`;