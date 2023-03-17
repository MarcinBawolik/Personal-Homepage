import styled, { css } from "styled-components";
import shape from "../../images/shape.png";

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 0px auto 120px auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    margin-left: 16px;
    margin-right: 16px;
  }
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
  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    grid-template-columns: 1fr; 
  }
`;
export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.color.mercury};
  padding: 56px;
  transition: border 0.5s ease-in-out;
  &:hover{
    border: 6px solid ${({ theme }) => theme.color.mischka};
  }
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
