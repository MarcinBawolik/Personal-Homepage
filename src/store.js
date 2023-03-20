import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/slice"

const store = configureStore ({
    reducer:{
        theme: themeReducer,
    },
});

export default store;