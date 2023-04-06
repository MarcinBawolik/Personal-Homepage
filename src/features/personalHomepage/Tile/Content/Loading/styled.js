import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 88px;
  font-size: 20px;
  display: grid;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
    margin-top: 32px;
  }
`;

export const Spinner = styled.div`
  border: 16px solid ${({ theme }) => theme.colors.spinner.border};
  border-top: 16px solid ${({ theme }) => theme.colors.spinner.borderTop};
  border-radius: 50%;
  width: 160px;
  height: 160px;
  animation: spin 2s linear infinite;
  margin: 48px auto 0px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 120px;
    height: 120px;
    border: 12px solid ${({ theme }) => theme.colors.spinner.border};
    border-top: 12px solid ${({ theme }) => theme.colors.spinner.borderTop};
  }
`;
