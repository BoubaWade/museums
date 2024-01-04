import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSignInWithEmailAndPassword } from "../features/sign/signSlice";
import { initialiseMyListMuseumsInFirestore } from "../Firebase/firebaseUtilities";
import { getEmailLocalStorage } from "../utils/user";
// import { reloadPage } from "../utils/utils";

export default function useSignIn(emailRef, passwordRef) {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const credentials = {
    email: emailRef.current?.value,
    password: passwordRef.current?.value,
  };

  const handleSignIn = async () => {
    const email = getEmailLocalStorage();
    dispatch(getSignInWithEmailAndPassword(credentials)).then(() => {
      initialiseMyListMuseumsInFirestore(credentials.email);
      navigate("/profile/profile-home");
      // reloadPage();
    });
  };
  return { handleSignIn };
}
