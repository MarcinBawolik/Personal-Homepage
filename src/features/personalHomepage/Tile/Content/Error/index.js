import { ReactComponent as Danger } from "../../../../../images/danger.svg";
import { Paragraph, Header, Wrapper } from "./styled";
import { ButtonLink } from "../../../ButtonLink";

export const Error = () => (
  <Wrapper>
    <Danger />
    <Header>Ooops! Something went wrong...</Header>
    <Paragraph>
      Sorry, failed to load Github projects.<br></br> You can check them
      directly on Github.
    </Paragraph>
    <ButtonLink href={`https://github.com/MarcinBawolik`} target="_blank">
      Go to Github
    </ButtonLink>
  </Wrapper>
);
