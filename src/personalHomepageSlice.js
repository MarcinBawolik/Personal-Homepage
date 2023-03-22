import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    projects: null,
    status: "initial",
  },
  reducers: {
    fetchProjects: () => ({
      projects: null,
      status: "loading",
    }),
    fetchProjectsSucces: (_, { payload: projects }) => ({
      projects,
      status: "succes",
    }),
    fetchProjectsError: () => ({
      projects: null,
      status: "error",
    }),
  },
});

export const { fetchProjects, fetchProjectsSucces, fetchProjectsError } =
  personalHomepageSlice.actions;

const selectPersonalHomepageState = state => state.personalHomepage;

export const selectProjects = state => selectPersonalHomepageState(state).projects;
export const selectProjectsStatus = state => selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;
