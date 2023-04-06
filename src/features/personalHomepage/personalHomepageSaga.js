import { call, takeLatest, put, delay } from "redux-saga/effects";
import {
  fetchProjects,
  fetchProjectsError,
  fetchProjectsSucces,
} from "./personalHomepageSlice";
import { getRepositories } from "./getRepo";

function* fetchRepositoriesHandler() {
  try {
    yield delay(3000); // just to demo the loading
    const repository = yield call(getRepositories);
    yield put(fetchProjectsSucces(repository));
  } catch (error) {
    yield put(fetchProjectsError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchProjects.type, fetchRepositoriesHandler);
}
