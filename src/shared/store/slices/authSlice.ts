import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    userRole: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    userRole: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state: AuthState, action: PayloadAction<{ userRole: string }>) => {
            state.isAuthenticated = true;
            state.userRole = action.payload.userRole;
        },
        logout: (state: AuthState) => {
            state.isAuthenticated = false;
            state.userRole = null;
        },
    },
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
