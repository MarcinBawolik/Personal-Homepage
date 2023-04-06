import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 95px;
  display: grid;
  grid-gap: 32px;
  justify-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 24px;
  }
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;
