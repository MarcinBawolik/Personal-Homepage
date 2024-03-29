import styled from "styled-components";

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const Tile = styled.li`
  background-color: ${({ theme }) => theme.colors.boxBackground};
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  padding: 56px;
  margin: 0;
  transition: border-color 0.5s;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSamll};

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.borderHover};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.tile.header};
  font-size: 24px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin-top: 24px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const Links = styled.dl`
  margin-top: 24px;
  margin-bottom: 0;
  display: grid;
  grid-gap: 8px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration-color: rgba(3, 102, 214, 0.2);
`;
