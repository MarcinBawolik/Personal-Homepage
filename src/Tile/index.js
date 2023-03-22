import {
  HeaderParagraph,
  HeaderWrapper,
  Wrapper,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, selectProjectsStatus } from "../personalHomepageSlice";
import { useEffect } from "react";
import { Content } from "./Content";

export const Tiles = () => {
  const dispatch = useDispatch();

  const projectsStatus = useSelector(selectProjectsStatus);

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
      <Content 
      status={projectsStatus}
      />
    </Wrapper>
  );
};
