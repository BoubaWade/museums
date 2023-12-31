import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setIsRegistered,
  setUserEmail,
  toggleSignUpForm,
} from "../features/sign/signSlice";
import { initialCredentials, initialErrorField } from "../config/config";
import { signUp } from "../Firebase/firebaseUtilities";

export default function useSignUp() {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [errorField, setErrorField] = useState(initialErrorField);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const resetForm = () => {
    setCredentials(initialCredentials);
    setErrorField(initialErrorField);
    dispatch(setIsRegistered(true));
    setTimeout(() => {
      dispatch(setIsRegistered(false));
      dispatch(toggleSignUpForm());
    }, 2000);
  };
  function handleSignUp() {
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!regexEmail.test(credentials.email)) {
      setErrorField({ ...errorField, errorEmail: "Email non valide !" });
      return;
    }
    if (credentials.password.length < 6) {
      setErrorField({ ...errorField, errorPassword: "6 caractères minimum !" });
      return;
    }
    if (credentials.confirmPassword !== credentials.password) {
      setErrorField({
        ...errorField,
        errorConfirmPassword: "Mots de passe non identiques",
      });
      return;
    }

    signUp(credentials.email, credentials.password)
      .then((response) => {
        dispatch(setUserEmail(response.user.email));
        resetForm();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setErrorField({ ...errorField, errorEmail: "Email déja utilisé !" });
        }
      });
  }

  return {
    credentials,
    errorField,
    handleChange,
    handleSignUp,
  };
}
