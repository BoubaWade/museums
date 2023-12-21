import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";

export const checkAuthState = createAsyncThunk(
  "checkAuth/checkAuthState",
  async (_, { dispatch }) => {
    const unsubscribe = await onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setCurrentUser(currentUser.accessToken));
      } else {
        dispatch(setCurrentUser(null));
      }
      unsubscribe();
    });
  }
);

const checkAuthSlice = createSlice({
  name: "checkAuth",
  initialState: {
    currentUser: null,
    loadingData: true,
    error: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLoadingData: (state, action) => {
      state.loadingData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthState.pending, (state) => {
        state.loadingData = true;
      })
      .addCase(checkAuthState.fulfilled, (state, action) => {
        state.loadingData = false;
      })
      .addCase(checkAuthState.rejected, (state, action) => {
        state.loadingData = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentUser, setLoadingData } = checkAuthSlice.actions;
export default checkAuthSlice.reducer;
