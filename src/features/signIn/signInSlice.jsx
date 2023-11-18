import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    credentials: {},
    rememberMe: false,
    isToggleLoginForm: true,
    errorEmail: "",
    errorPassword: "",
  },
  reducers: {
    toggleLoginForm: (state, action) => {
      state.isToggleLoginForm = !state.isToggleLoginForm;
    },
  },
});

export const { toggleLoginForm } = signInSlice.actions;

export default signInSlice.reducer;
