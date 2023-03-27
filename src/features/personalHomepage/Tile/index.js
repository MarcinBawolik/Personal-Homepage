import { HeaderParagraph, HeaderWrapper, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  selectProjects,
  selectProjectsStatus,
} from "../../../features/personalHomepage/personalHomepageSlice";
import { useEffect } from "react";
import { Content } from "./Content";

export const Tiles = () => {
  const dispatch = useDispatch();

  const projectsStatus = useSelector(selectProjectsStatus);
  const projects = useSelector(selectProjects);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderParagraph image="true"></HeaderParagraph>
        <HeaderParagraph title="true">Portfolio</HeaderParagraph>
        <HeaderParagraph subtitle="true">My recent projects</HeaderParagraph>
      </HeaderWrapper>
      <Content status={projectsStatus} projects={projects} />
    </Wrapper>
  );
};
