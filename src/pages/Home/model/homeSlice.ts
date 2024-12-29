import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HomeState} from "./types.ts";

const initialState: HomeState = {
    count: 0,
    loading: false,
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setCount: (state: HomeState, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        increment: (state: HomeState) => {
            state.count += 1;
        },
        setLoading: (state: HomeState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const {setCount, increment, setLoading} = homeSlice.actions;
export default homeSlice.reducer;
