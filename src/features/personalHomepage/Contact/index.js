import {
  Paragraph,
  ImageWrapper,
  Wrapper,
  StyledGithub,
  StyledLinkedin,
} from "./styled";

export const Contact = () => {
  return (
    <Wrapper>
      <Paragraph talk="true">LET'S TALK</Paragraph>
      <Paragraph email="true">martinbawolik@gmail.com</Paragraph>
      <Paragraph content="true">
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me
      </Paragraph>
      <ImageWrapper href="https://github.com/MarcinBawolik" target="_blanck">
        <StyledGithub />
      </ImageWrapper>
      <ImageWrapper href="https://pl.linkedin.com/" target="_blanc">
        {/* dont have account on linkedin yet */}
        <StyledLinkedin />
      </ImageWrapper>
    </Wrapper>
  );
};
