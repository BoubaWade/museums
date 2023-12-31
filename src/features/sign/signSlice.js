import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../Firebase/firebase-config";
import { signIn } from "../../Firebase/firebaseUtilities";

// export const checkAuthState = createAsyncThunk(
//   "checkAuth/checkAuthState",
//   async (_, { dispatch }) => {
//     const unsubscribe = await onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         console.log("je suis connecté", currentUser.email);
//         dispatch(setUserEmail(currentUser.email));
//       }
//       else {
//         console.log("je ne suis pas connecté");

//         dispatch(setUserEmail(""));
//       }
//     });
//     // console.log(unsubscribe());
//     return () => unsubscribe();
//   }
// );

export const getSignInWithEmailAndPassword = createAsyncThunk(
  "sign/getSignInWithEmailAndPassword",
  async (credentials, { dispatch }) => {
    try {
      const userCredential = await signIn(
        credentials.email,
        credentials.password
      );
      dispatch(setCurrentUser(userCredential.user.providerData[0]));
      const { accessToken, email } = userCredential.user;
      // createMuseumsInFirestore(museumsFakeDatas);
      dispatch(setUserEmail(email));
      localStorage.setItem("token", accessToken);
      localStorage.setItem("email", email);
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        dispatch(setErrorLogIn("Email ou Mot de passe invalide"));
      }
    }
  }
);

export const signSlice = createSlice({
  name: "sign",
  initialState: {
    userEmail: "",
    currentUser: null,
    loading: true,
    errorLogin: "",
    isToggleSignUpForm: false,
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
    setErrorLogIn: (state, action) => {
      state.errorLogin = action.payload;
    },
    toggleLoginForm: (state) => {
      state.isToggleLoginForm = !state.isToggleLoginForm;
    },
    toggleSignUpForm: (state) => {
      state.isToggleSignUpForm = !state.isToggleSignUpForm;
    },
    setIsRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSignInWithEmailAndPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSignInWithEmailAndPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getSignInWithEmailAndPassword.rejected, (state, action) => {
        state.loading = false;
        state.errorLogin = action.error.message;
      });
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(checkAuthState.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(checkAuthState.fulfilled, (state, action) => {
  //       state.loading = false;
  //     })
  //     .addCase(checkAuthState.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // },
});

export const {
  setUserEmail,
  setCurrentUser,
  setErrorLogIn,
  toggleLoginForm,
  toggleSignUpForm,
  setIsRegistered,
} = signSlice.actions;

export default signSlice.reducer;
