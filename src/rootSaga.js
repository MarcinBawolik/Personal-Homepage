import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "./personalHomepageSaga";

export default function* rootSaga() {
    yield all([
        personalHomepageSaga(),
    ]);
};