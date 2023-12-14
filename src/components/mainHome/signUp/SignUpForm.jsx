import { useState } from "react";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  setIsRegistered,
  setUserEmail,
  toggleModal,
} from "../../../features/sign/signSlice";
import {
  initialCredentials,
  initialErrorField,
  inputFieldsSignUp,
} from "../../../config/config";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import InputSignUp from "./InputSignUp";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState(initialCredentials);
  const [errorField, setErrorField] = useState(initialErrorField);

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
      dispatch(toggleModal());
    }, 2000);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
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
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((response) => {
        dispatch(setUserEmail(response.user.email));
        resetForm();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setErrorField({ ...errorField, errorEmail: "Email déja utilisé !" });
        }
      });
  };
  
  return (
    <SignUpFormStyled onSubmit={(e) => handleSignUp(e)}>
      <h2>CRÉER UN COMPTE</h2>
      {inputFieldsSignUp(credentials, handleChange, errorField).map(
        (field, index) => (
          <InputSignUp key={index} field={field} />
        )
      )}
      <PrimaryButton className="primary-button" label="VALIDER" />
    </SignUpFormStyled>
  );
}

const SignUpFormStyled = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h2 {
    color: white;
    text-align: center;
    margin: 10px 0 20px;
  }
  .primary-button {
    font-size: 0.9rem;
    padding: 15px 45px;
  }
`;
