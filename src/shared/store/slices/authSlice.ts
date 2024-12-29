import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getLocalStorage, removeLocalStorage, setLocalStorage} from "../../utils/localStorage.ts";

interface AuthState {
    isAuthenticated: boolean;
    userRole: string | null;
}

const initialState: AuthState = {
    isAuthenticated: getLocalStorage("userRole") !== undefined,
    userRole: getLocalStorage("userRole") ?? null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state: AuthState, action: PayloadAction<{ userRole: string }>) => {
            setLocalStorage("userRole", action.payload.userRole);
            state.isAuthenticated = true;
            state.userRole = action.payload.userRole;
        },
        logout: (state: AuthState) => {
            removeLocalStorage("userRole");
            state.isAuthenticated = false;
            state.userRole = null;
        },
    },
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
