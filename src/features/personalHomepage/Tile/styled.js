import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../../images/github.svg";

export const Wrapper = styled.div`
  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const StyledGithubIcon = styled(GithubIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const Header = styled.header`
  text-align: center;
`;

export const MyRecentProjects = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: normal;
  margin-top: 8px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;
