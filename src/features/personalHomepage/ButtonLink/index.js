import styled from "styled-components";

export const ButtonLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  color: ${({ theme }) => theme.colors.buttonLink.text};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background: ${({ theme }) => theme.colors.primary};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.buttonLink.shadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
