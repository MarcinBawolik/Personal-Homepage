import styled, {css} from "styled-components";
import me from "../images/me.jpg"
import button from "../images/button.png"
import togglemode from "../images/togglemode.png"

export const Wrapper = styled.div`
display: grid;
grid-template-columns: auto 1fr;
margin: 0px auto;
max-width: 1216px;
`;
export const Image = styled.div`
width: 398px;
height: 398px;
border-radius: 50%;
background-image: url("${me}");
`;
export const ParagraphWrapper = styled.div`
max-width: 633px;
margin-left: 66px;
`;
export const Paragraph = styled.p`
clear: both;
${(props)  => props.toggle && css`
width: 159px;
height: 26px;
background-image: url("${togglemode}");
float:right;
`}
${(props) => props.this && css`
color: ${({ theme }) => theme.color.slategray};
font-weight: 700;
font-size: 12px;
`}
${(props) => props.name && css`
color: ${({ theme }) => theme.color.mineshaft};
font-weight: 900;
font-size: 38px;
`}
${(props) => props.discription && css`
color: ${({ theme }) => theme.color.slategray};
font-weight: 400;
font-size: 20px;
`}
${(props) => props.hire && css`
width: 154px;
height: 49px;
background-image: url("${button}");
`}
`;