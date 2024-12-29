import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "./homeSlice.ts";

const homeStore = configureStore({
    reducer: {
        home: homeReducer,
    },
});

export default homeStore;
