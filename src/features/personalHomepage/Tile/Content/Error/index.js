import { ReactComponent as Danger } from "../../../../../images/danger.svg";
import { Paragraph, SubHeader, Wrapper, LinkButton } from "./styled";

export const Error = () => (
  <Wrapper>
    <Danger />
    <SubHeader>Ooops! Something went wrong...</SubHeader>
    <Paragraph>
      Sorry, failed to load Github projects.<br></br> You can check them
      directly on Github.
    </Paragraph>
    <LinkButton href={`https://github.com/MarcinBawolik`} target="_blank">
      Go to Github
    </LinkButton>
  </Wrapper>
);
