import styled, { css } from "styled-components";

export const Wrapper = styled.div`
max-width: 691px;
margin: 120px auto 109px auto;
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
`};
`;

export const Image = styled.img`
width: 47.91px;
height: 47.53px;
`;
