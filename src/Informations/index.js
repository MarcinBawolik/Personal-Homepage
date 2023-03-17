import { Wrapper, Image, ParagraphWrapper, Paragraph } from "./styled";
import me from "../images/me.jpg"

const Informations = () => (
  <Wrapper>
    <Image src={me} alt=""/>
    <ParagraphWrapper>
      <Paragraph toggle></Paragraph>
      <Paragraph this>This is</Paragraph>
      <Paragraph name>Marcin Bawolik</Paragraph>
      <Paragraph discription>
        🧑🏻💻I am a young, ambitious person. I love challenges, teamwork and
        solving problems. I am currently looking for new job opportunities.
      </Paragraph>
      <Paragraph hire></Paragraph>
    </ParagraphWrapper>
  </Wrapper>
);

export default Informations;
