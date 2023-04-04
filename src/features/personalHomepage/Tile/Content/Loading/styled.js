import styled from "styled-components";
import { themeLight } from "../../../../../common/Theme/theme";

export const Wrapper = styled.div`
  margin: 88px auto 148px auto;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) =>
    theme === themeLight ? theme.color.black : theme.color.white};
  font-size: 20px;
`;

export const Spinner = styled.div`
  border: 16px solid ${({ theme }) => theme.color.iron};
  border-top: 16px solid ${({ theme }) => theme.color.scienceblue};
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

  @media (max-width: ${({ theme }) => theme.breakpoint.iPhoneSE}px) {
    width: 120px;
    height: 120px;
    border: 12px solid ${({ theme }) => theme.color.iron};
    border-top: 12px solid ${({ theme }) => theme.color.scienceblue};
  }
`;
