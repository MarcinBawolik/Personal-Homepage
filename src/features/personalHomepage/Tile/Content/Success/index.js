import {
  Tile,
  Wrapper,
  Link,
  Text,
  Description,
  Header,
  LinkAndTextWrapper,
} from "./styled";

export const Success = ({ projects }) => (
  <Wrapper>
    {projects.map(({ id, name, description, homepage, html_url }) => (
      <Tile key={id}>
        <Header>{name}</Header>
        <Description>{description}</Description>
        <LinkAndTextWrapper>
          <Text>Demo:</Text>
          <Link target="_blank" rel="noreferrer" href={homepage}>
            {homepage}
          </Link>
        </LinkAndTextWrapper>
        <LinkAndTextWrapper>
          <Text>Code:</Text>
          <Link target="_blank" rel="noreferrer" href={html_url}>
            {html_url}
          </Link>
        </LinkAndTextWrapper>
      </Tile>
    ))}
  </Wrapper>
);
