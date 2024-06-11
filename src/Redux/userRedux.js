import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    currentUser: null,
    error: null,
    isAuthenticated: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.currentUser = null;
      state.error = null;
      state.isAuthenticated = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logOut: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;

export default userSlice.reducer;
