import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./actions/auth.action";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
