import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    error: null
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authStart: (state) => {
            state.loading = true;
            state.error = null
        },
        authSuccess: (state) => {
            state.loading = false;
            state.error = null
        },
        authFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const { authFailure, authStart, authSuccess } = AuthSlice.actions
export default AuthSlice.reducer