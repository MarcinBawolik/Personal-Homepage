import { MyRecentProjects, Header, Wrapper, StyledGithubIcon } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  selectProjects,
  selectProjectsStatus,
} from "../../../features/personalHomepage/personalHomepageSlice";
import { useEffect } from "react";
import { Content } from "./Content";
import { SubHeader } from "../SubHeader";

export const Tiles = () => {
  const dispatch = useDispatch();

  const projectsStatus = useSelector(selectProjectsStatus);
  const projects = useSelector(selectProjects);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>
        <StyledGithubIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
      <Content status={projectsStatus} projects={projects} />
    </Wrapper>
  );
};
