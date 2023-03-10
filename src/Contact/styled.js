import styled, { css } from "styled-components";

export const Wrapper = styled.div`
position: absolute;
width: 691px;
height: 282px;
margin-top: 1684px;
margin-left: 352px;
margin-bottom: 80px;
`;

export const Paragraph = styled.p`

${(props) => props.talk && css`
color: ${({ theme }) => theme.color.slategray};
font-weight: 700;
font-size: 12px;
`};
${(props) => props.email && css`
color: ${({ theme }) => theme.color.black};
font-weight: 900;
font-size: 32px;
`};
${(props) => props.content && css`
color: ${({ theme }) => theme.color.black};
font-weight: 400;
font-size: 18px;
line-height: 140%;
letter-spacing: 0.05em;
`};
`;
export const Image = styled.img`
width: 47.91px;
height: 47.53px;
`;
