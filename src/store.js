import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/slice";
import personalHomepageReducer from "./personalHomepageSlice";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    personalHomepage: personalHomepageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
