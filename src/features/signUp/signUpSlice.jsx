import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
// import { relative } from "path/win32";

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};
export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
// export const signUpy = createAsyncThunk(
//   "signUp/signUp",
//   async (userData, { dispatch, rejectWithValue }) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         userData.email,
//         userData.password
//       );
//       const userEmail = userCredential.user.email;
//       dispatch(setCurrentUser(userEmail));
//       console.log(userCredential);
//       return userCredential;
//     } catch (error) {
//       if (rejectWithValue(error.code).payload === "auth/email-already-in-use") {
//         dispatch(
//           setErrorField({
//             field: "errorEmail",
//             error: "Email déja utilisé !",
//           })
//         );
//       }
//       return rejectWithValue(error.code);
//     }
//   }
// );

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    currentUser: null,
    // loadingSignup: false,
    // errorSignup: false,
    isToggleModal: false,
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
  },
  reducers: {
    toggleModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = payload;
    },
    setErrorField: (state, action) => {
      const { field, error } = action.payload;
      state[field] = error;
    },
    resetErrors: (state) => {
      state.errorEmail = "";
      state.errorPassword = "";
      state.errorConfirmPassword = "";
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(signUp.pending, (state) => {
    //       state.loadingSignup = true;
    //     })
    //     .addCase(signUp.fulfilled, (state, action) => {
    //       state.loadingSignup = false;
    //       // state.currentUser = action.payload.user.email;
    //     })
    //     .addCase(signUp.rejected, (state, action) => {
    //       state.loadingSignup = false;
    //       state.errorSignup = true;
    //       // console.log(error.message);
    //     });
    // },
  },
});

export const { toggleModal, setErrorField, resetErrors, setCurrentUser } =
  signUpSlice.actions;

export default signUpSlice.reducer;
