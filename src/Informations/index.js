import { Wrapper, Image, ParagraphWrapper, Paragraph } from "./styled";

const Informations = () => (
  <Wrapper>
    <Image />
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
