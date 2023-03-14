import { Image, Paragraph, Wrapper } from "./styled";
import github_black from "../images/github_black.svg"
import linkedin_black from "../images/linkedin_black.svg"

export const Contact = () => (
    <Wrapper>
<Paragraph talk>LET'S TALK</Paragraph>
<Paragraph email>martinbawolik@gmail.com</Paragraph>
<Paragraph content> I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come<br /> to life, feel free to conatct me</Paragraph>
<Paragraph><Image src={github_black} alt=""/><Image src={linkedin_black} alt=""/></Paragraph>
    </Wrapper>
)