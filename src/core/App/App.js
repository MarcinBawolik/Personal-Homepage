import PersonalHomepage from "../../features/personalHomepage/PersonalHomepage";
import { useSelector } from "react-redux";
import { selectDarkThemeOn } from "../../common/Theme/themeSlice";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";

export const App = () => {
  const darkThemeOn = useSelector(selectDarkThemeOn);

  return (
    <ThemeProvider theme={darkThemeOn ? themeDark : themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};
