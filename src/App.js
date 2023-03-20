import PersonalHomepage from "./PersonalHomepage";
import { useSelector } from "react-redux";
import { selectDarkThemeOn } from "./Theme/slice";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Provider } from "react-redux";
import store from "./store";
import { themeLight, themeDark } from "./Theme/theme";

export const App = () => {
    const darkThemeOn = useSelector(selectDarkThemeOn);

    return (
        <ThemeProvider theme={darkThemeOn ? themeDark : themeLight}>
            <GlobalStyle />
            <Provider store={store}>
                <PersonalHomepage />
            </Provider>
        </ThemeProvider>
    )
}