import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
// export const signUp = async (email, password) => {
//   await createUserWithEmailAndPassword(auth, email, password);
// };
// export const signIn = async (email, password) => {
//   await signInWithEmailAndPassword(auth, email, password);
// };
export const checkAuthState = createAsyncThunk(
  "checkAuth/checkAuthState",
  async (_, { dispatch }) => {
    const unsubscribe = await onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setCurrentUser(currentUser.providerData[0]));
      } else {
        dispatch(setCurrentUser(null));
      }
      return () => unsubscribe();
    });
  }
);

export const signSlice = createSlice({
  name: "sign",
  initialState: {
    userEmail: "",
    currentUser: null,
    loadingData: true,
    error: null,
    isToggleModal: false,
    isToggleLoginForm: true,
    isRegistered: false,
    rememberMe: false,
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    toggleLoginForm: (state) => {
      state.isToggleLoginForm = !state.isToggleLoginForm;
    },
    toggleModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
    setIsRegistered: (state, action) => {
      state.isRegistered = action.payload;
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

export const {
  setUserEmail,
  setCurrentUser,
  toggleLoginForm,
  toggleModal,
  setIsRegistered,
} = signSlice.actions;

export default signSlice.reducer;
