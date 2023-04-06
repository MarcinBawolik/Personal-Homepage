import {
  Wrapper,
  Paragraph,
  EmailLink,
  EmailWrapper,
  LetsTalk,
  Address,
} from "./styled";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  return (
    <Wrapper>
      <LetsTalk> Let's talk!</LetsTalk>
      <Address>
        <EmailWrapper>
          <EmailLink href={`mailto:"martinbawolik@gmail.com"`}>
            martinbawolik@gmail.com
          </EmailLink>
        </EmailWrapper>
        <Paragraph>
          I’m always open to new projects. If you have
          a&nbsp; website or mobile app in mind and need some help to
          make your ideas come to life, feel free to conatct me.
        </Paragraph>
        <SocialIcons />
      </Address>
    </Wrapper>
  );
};
