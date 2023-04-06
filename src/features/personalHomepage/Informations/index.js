import {
  Wrapper,
  Avatar,
  Name,
  Summary,
  ThisIs,
  StyledButtonLink,
  ButtonIcon,
} from "./styled";
import me from "../../../images/me.jpg";
import { ThemeSwitch } from "../../../common/Theme/ThemeSwitch";

const Informations = () => (
  <Wrapper>
    <Avatar src={me} alt="Marcin Bawolik" />
    <div>
      <ThemeSwitch />
      <ThisIs>This is</ThisIs>
      <Name>Marcin Bawolik</Name>
      <Summary>
        🧑🏻💻I am a young, ambitious person. I love challenges, teamwork and
        solving problems. I am currently looking for new job opportunities.
      </Summary>
      <StyledButtonLink
        href="mailto:martinbawolik@gmail.com"
        title="martinbawolik@gmail.com"
      >
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);

export default Informations;
