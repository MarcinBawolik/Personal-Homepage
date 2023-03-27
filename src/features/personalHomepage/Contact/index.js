import {
  Paragraph,
  ImageWrapper,
  Wrapper,
  StyledGithub,
  StyledLinkedin,
} from "./styled";

export const Contact = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <Paragraph talk="true">LET'S TALK</Paragraph>
      <Paragraph email="true">martinbawolik@gmail.com</Paragraph>
      <Paragraph content="true">
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me
      </Paragraph>
      <ImageWrapper
        onClick={() => openLink("https://github.com/MarcinBawolik")}>
        <StyledGithub />
      </ImageWrapper>
      <ImageWrapper onClick={() => openLink("https://pl.linkedin.com/")}>
        {/* dont have account on linkedin yet */}
        <StyledLinkedin />
      </ImageWrapper>
    </Wrapper>
  );
};
