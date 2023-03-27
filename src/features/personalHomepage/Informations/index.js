import {
  Wrapper,
  Image,
  ParagraphWrapper,
  ToggleButton,
  Text,
  Icon,
  IconBox,
  ToggleButtonWrapper,
  Header,
  Discription,
  ThisIs,
  HireMe,
  Envelope,
  HireMeText,
  IconWrapper,
} from "./styled";
import me from "../../../images/me.jpg";
import envelope from "../../../images/envelope.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkThemeOn, toggleTheme } from "../../../Theme/slice";

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
              <IconWrapper darkThemeOn={darkThemeOn}>
                <Icon />
              </IconWrapper>
            </IconBox>
          </ToggleButton>
        </ToggleButtonWrapper>
        <ThisIs>This is</ThisIs>
        <Header>Marcin Bawolik</Header>
        <Discription>
          🧑🏻💻I am a young, ambitious person. I love challenges, teamwork and
          solving problems. I am currently looking for new job opportunities.
        </Discription>
        <HireMe
          href="mailto:martinbawolik@gmail.com"
          target="_blank"
          title="martinbawolik@gmail.com"
        >
          <Envelope src={envelope} alt="" />
          <HireMeText>Hire me</HireMeText>
        </HireMe>
      </ParagraphWrapper>
    </Wrapper>
  );
};

export default Informations;
