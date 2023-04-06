import {
  ToggleButtonWrapper,
  ToggleButton,
  Text,
  IconBox,
  Icon,
  IconWrapper,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkThemeOn, toggleTheme } from "../themeSlice";

export const ThemeSwitch = () => {
  const darkThemeOn = useSelector(selectDarkThemeOn);
  const dispatch = useDispatch();

  return (
    <ToggleButtonWrapper>
      <ToggleButton onClick={() => dispatch(toggleTheme())}>
        <Text>Dark Mode {darkThemeOn ? "On" : "Off"}</Text>
        <IconBox>
          <IconWrapper moveToRight={darkThemeOn}>
            <Icon />
          </IconWrapper>
        </IconBox>
      </ToggleButton>
    </ToggleButtonWrapper>
  );
};
