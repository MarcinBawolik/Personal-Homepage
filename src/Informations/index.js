import {
  Wrapper,
  Image,
  ParagraphWrapper,
  ToggleButton,
  Text,
  IconBox,
  SunIcon,
  ToggleButtonWrapper,
  HireButton,
  Header,
  Discription,
  ThisIs,
} from "./styled";
import me from "../images/me.jpg";
import { useState } from "react";

const Informations = () => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(isClicked === false ? true : false);
  }
  return (
    <Wrapper>
      <Image src={me} alt="" />
      <ParagraphWrapper>
        <ToggleButtonWrapper>
          <ToggleButton onClick={handleClick}>
            <Text>Dark Mode {isClicked === true ? "On" : "Off"}</Text>
            <IconBox>
              <SunIcon isClicked={isClicked} />
            </IconBox>
          </ToggleButton>
        </ToggleButtonWrapper>
        <ThisIs>This is</ThisIs>
        <Header>Marcin Bawolik</Header>
        <Discription>
          🧑🏻💻I am a young, ambitious person. I love challenges, teamwork and
          solving problems. I am currently looking for new job opportunities.
        </Discription>
        <HireButton />
      </ParagraphWrapper>
    </Wrapper>
  );
};

export default Informations;
