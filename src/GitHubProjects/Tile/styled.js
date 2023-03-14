import styled, { css } from "styled-components";
import shape from "../../images/shape.png";

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 0px auto 120px auto;
`;
export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  margin: 0px auto 24px auto;
`;
export const HeaderParagraph = styled.p`
  ${(props) =>
    props.image &&
    css`
      width: 40px;
      height: 39.01px;
      background-image: url("${shape}");
      margin: 0px auto;
    `}
  ${(props) =>
    props.title &&
    css`
      color: ${({ theme }) => theme.color.black};
      font-weight: 900;
      font-size: 30px;
      margin: 12.99px auto 8px auto;
    `}
${(props) =>
    props.subtitle &&
    css`
color: ${({ theme }) => theme.color.mineshaft}
font-weight: 400;
font-size: 20px;
margin: 0px auto 24px auto;
`}
`;
export const TileWrapper = styled.div`
  max-width: 1216px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  ${(props) => props.loading && css``}
  ${(props) => props.error && css``}
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px)
{
    grid-template-columns: 1fr;
}
`;
export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  padding: 56px;
`;
export const TileParagraph = styled.p`
  ${(props) =>
    props.header &&
    css`
      color: ${({ theme }) => theme.color.scienceblue};
      font-weight: 700;
      font-size: 24px;
    `}
  ${(props) =>
    props.content &&
    css`
      color: ${({ theme }) => theme.color.slategray};
      font-weight: 400;
      font-size: 18px;
    `}
${(props) =>
    props.link &&
    css`
color: ${({ theme }) => theme.color.slategray}
font-weight: 400;
font-size: 18px;
`}
`;
