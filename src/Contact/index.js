import { Image, Paragraph, ImageWrapper, Wrapper } from "./styled";
import github_black from "../images/github_black.svg";
import linkedin_black from "../images/linkedin_black.svg";

export const Contact = () => {
  const openLink = () => {
    window.open("https://github.com/MarcinBawolik", "_blank");
  };

  return (
    <Wrapper>
      <Paragraph talk="true">LET'S TALK</Paragraph>
      <Paragraph email="true">martinbawolik@gmail.com</Paragraph>
      <Paragraph content="true">
        {" "}
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come
        <br /> to life, feel free to conatct me
      </Paragraph>
      <Paragraph>
        <ImageWrapper onClick={openLink}>
          <Image src={github_black} alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={linkedin_black} alt="" />
        </ImageWrapper>
      </Paragraph>
    </Wrapper>
  );
};
