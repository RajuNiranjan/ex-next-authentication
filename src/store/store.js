import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Actions/authSlice.action'

export const store = configureStore({
    reducer: {
        auth: AuthReducer
    }
})