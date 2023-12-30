import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSignInWithEmailAndPassword } from "../features/sign/signSlice";
import { getEmailLocalStorage } from "../utils/user";
import { initialiseMyListMuseumsInFirestore } from "../Firebase/firebaseUtilities";
import { reloadPage } from "../utils/utils";

export default function useSignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const signIn = await dispatch(getSignInWithEmailAndPassword(credentials));
    if (signIn) {
      const email = getEmailLocalStorage();
      await initialiseMyListMuseumsInFirestore(email);
      navigate("/profile/profile-home");
      reloadPage();
    }
  };
  return { emailRef, passwordRef, handleSignIn };
}
