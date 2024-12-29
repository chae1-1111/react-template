import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.ts";
import homeReducer from "../../pages/Home/model/homeSlice.ts";

const store = configureStore({
    reducer: {
        auth: authReducer,
        home: homeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
