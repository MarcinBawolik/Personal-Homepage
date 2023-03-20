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
import { useDispatch, useSelector } from "react-redux";
import { selectDarkThemeOn, toggleTheme } from "../Theme/slice";

const Informations = () => {
  const darkThemeOn = useSelector(selectDarkThemeOn);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Image src={me} alt="" />
      <ParagraphWrapper>
        <ToggleButtonWrapper>
          <ToggleButton onClick={() => dispatch(toggleTheme())}>
            <Text>Dark Mode {darkThemeOn ? "On" : "Off"}</Text>
            <IconBox>
              <SunIcon darkThemeOn={darkThemeOn} />
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
