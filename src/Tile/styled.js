import styled, { css } from "styled-components";
import shape from "../images/shape.png"

export const Wrapper = styled.div`
position: absolute;
width: 1216px;
height: 824px;
margin: 820px 350px 72px 354px;
`;
export const HeaderWrapper = styled.div`
position: absolute;
width: 195px;
height: 124px;
margin-left: 510.5px;
display: grid;
grid-template-rows: auto auto auto;
`;
export const HeaderParagraph = styled.p`
${(props) => props.image && css`
width: 40px;
height: 39.01px;
position: absolute;
background-image: url("${shape}");
margin-top: 0px;
margin-left: 77.5px;

`}
${(props) => props.title && css`
color: ${({ theme }) => theme.color.black};
position: absolute;
font-weight: 900;
font-size: 30px;
margin-top: 52px;
margin-left: 26px;
width: 143px;
height: 36px;
`}
${(props) => props.subtitle && css`
color: ${({ theme }) => theme.color.mineshaft}
position: absolute;
font-weight: 400;
font-size: 20px;
margin-top:96px;
width: 195px;
height: 28px;
`}
`;
export const TileWrapper = styled.div`
position: absolute;
width: 1216px;
height: 676px;
display: grid;
grid-gap: 20px;
grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;
margin-top: 124px;
`;
export const Tile = styled.div`
background-color: ${({ theme }) => theme.color.white};
border-radius: 4px;
border: 6px solid rgba(209, 213, 218, 0.3);
box-shadow:  0px -2px 50px rgba(9, 10, 51, 0.02),
             0px 16px 58px rgba(9, 10, 51, 0.03);
padding:56px;
width: 592px;
height: 322px;
`;
export const TileParagraph = styled.p`
${(props) => props.header && css`
color: ${({ theme }) => theme.color.scienceblue};
font-weight: 700;
font-size: 24px;
`}
${(props) => props.content && css`
color: ${({ theme }) => theme.color.slategray};
font-weight: 400;
font-size: 18px;
`}
${(props) => props.link && css`
color: ${({ theme }) => theme.color.slategray}
font-weight: 400;
font-size: 18px;
`}
`;