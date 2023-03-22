import { call, takeLatest, put, delay } from "redux-saga/effects";
import {
  fetchProjects,
  fetchProjectsError,
  fetchProjectsSucces,
} from "./personalHomepageSlice";
import { getRepositories } from "./getRepo";

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(3000);
    const repository = yield call(getRepositories, username);
    yield put(fetchProjectsSucces(repository));
  } catch (error) {
    yield put(fetchProjectsError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchProjects.type, fetchRepositoriesHandler);
}
