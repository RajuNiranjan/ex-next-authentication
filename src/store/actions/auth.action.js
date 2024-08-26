const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
      state.user = null;
    },
    authSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { authFailure, authStart, authSuccess } = authSlice.actions;
export default authSlice.reducer;
