import {
  Tile,
  Wrapper,
  Link,
  Text,
  Description,
  Header,
} from "./styled";

export const Success = ({ projects }) => (
  <Wrapper>
    <Tile>
      {projects.map(({ name, description, homepage, html_url }) => (
        <>
          <Header>{name}</Header>
          <Description>{description}</Description>
          <Text>Demo:</Text>
          <Link target="_blank" rel="noreferrer" href={homepage}>
            {homepage}
          </Link>
          <Text>Code:</Text>
          <Link target="_blank" rel="noreferrer" href={html_url}>
            {html_url}
          </Link>
        </>
      ))}
    </Tile>
  </Wrapper>
);
