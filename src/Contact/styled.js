import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 0px auto;
  `;

export const Paragraph = styled.p`
  ${(props) =>
    props.talk &&
    css`
      color: ${({ theme }) => theme.color.slategray};
      font-weight: 700;
      font-size: 12px;
    `};
  ${(props) =>
    props.email &&
    css`
      color: ${({ theme }) => theme.color.black};
      font-weight: 900;
      font-size: 32px;
      @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px)
{
    font-size: 20px;
}
    `};
  ${(props) =>
    props.content &&
    css`
      color: ${({ theme }) => theme.color.black};
      font-weight: 400;
      font-size: 18px;
      max-width: 691px;
    `};
`;

export const Image = styled.img`
  width: 47.91px;
  height: 47.53px;
  margin-right: 24px;
`;
