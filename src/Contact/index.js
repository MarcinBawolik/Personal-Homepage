import { Image, Paragraph, Wrapper } from "./styled";
import git from "../images/git.png"

export const Contact = () => (
    <Wrapper>
<Paragraph talk>LET'S TALK</Paragraph>
<Paragraph email>martinbawolik@gmail.com</Paragraph>
<Paragraph> I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come<br /> to life, feel free to conatct me</Paragraph>
<Paragraph><Image src={git} alt=""/></Paragraph>
    </Wrapper>
)