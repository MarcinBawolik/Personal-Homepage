import {
  HeaderParagraph,
  HeaderWrapper,
  Tile,
  TileParagraph,
  TileWrapper,
  Wrapper,
} from "../../GitHubProjects/Tile/styled";
import { PersonalHomepage, TasksListReact } from "../linksToGithubProjects";

export const Tiles = () => (
  <Wrapper>
    <HeaderWrapper>
      <HeaderParagraph image></HeaderParagraph>
      <HeaderParagraph title>Portfolio</HeaderParagraph>
      <HeaderParagraph subtitle>My recent projects</HeaderParagraph>
    </HeaderWrapper>
    <TileWrapper>
      <Tile>
        <TileParagraph header>Personal Homepage</TileParagraph>
        <TileParagraph content>
          This is the project we are on right now. I made it to present my
          current skills and what I would like to learn in the future. I
          regularly add my new projects and skills here.
        </TileParagraph>
        <TileParagraph link>Demo: plus link</TileParagraph>
        <TileParagraph link>
          Code: <PersonalHomepage />
        </TileParagraph>
      </Tile>
      <Tile>
        <TileParagraph header>Tasks-list-react</TileParagraph>
        <TileParagraph content>sth about project</TileParagraph>
        <TileParagraph link>Demo: plus link</TileParagraph>
        <TileParagraph link>Code: <TasksListReact /></TileParagraph>
      </Tile>
      <Tile>
        <TileParagraph header>Movie Browser</TileParagraph>
        <TileParagraph content>sth about project</TileParagraph>
        <TileParagraph link>Demo: plus link</TileParagraph>
        <TileParagraph link>Code: plus link</TileParagraph>
      </Tile>
      <Tile>
        <TileParagraph header>Movie Browser</TileParagraph>
        <TileParagraph content>sth about project</TileParagraph>
        <TileParagraph link>Demo: plus link</TileParagraph>
        <TileParagraph link>Code: plus link</TileParagraph>
      </Tile>
    </TileWrapper>
  </Wrapper>
);
