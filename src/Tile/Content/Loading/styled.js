import styled from "styled-components";
import { themeLight } from "../../../Theme/theme";

export const Spinner = styled.div`
  border: 16px solid ${({ theme }) => theme.color.iron};
  border-top: 16px solid ${({ theme }) => theme.color.scienceblue};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;