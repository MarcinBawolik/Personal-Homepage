import { Wrapper, Image, ParagraphWrapper, Paragraph } from "./styled";

const Informations = () => (
    <Wrapper>
        <Image />
        <ParagraphWrapper>
            <Paragraph this>This is</Paragraph>
            <Paragraph name>Marcin Bawolik</Paragraph>
            <Paragraph discription>🧑🏻💻I'm a passionate Frontend Developer in love with React, currently looking for new job opportunites.</Paragraph>
            <Paragraph hire></Paragraph>
        </ParagraphWrapper>
    </Wrapper>
)

export default Informations;