import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkThemeOn: false,
};

export const themeSlice = createSlice({
  name: "toggleTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkThemeOn = !state.darkThemeOn;
    },
  },
});

const selectThemeState = state => state.theme

export const { toggleTheme } = themeSlice.actions;

export const selectDarkThemeOn = state => selectThemeState(state).darkThemeOn

export default themeSlice.reducer;
