import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx";
import RememberCheckbox from "../../reusable-ui/RememberCheckbox.jsx";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../Firebase/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../../features/sign/signSlice";
import { inputFieldsSignIn } from "../../../config/config.js";
import InputLogIn from "./InputLogIn.jsx";
import { createDatasMuseumsInFirestore } from "../../../Firebase/firebaseUtilities.jsx";

export default function ClassicLoginForm() {
  const userEmail = useSelector((state) => state.sign.userEmail);
  const [errorCredentials, setErrorCredentials] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (isChecked) {
      localStorage.setItem("email", credentials.email);
      localStorage.setItem("password", credentials.password);
    }

    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // createDatasMuseumsInFirestore("JpUUO3A2iLNNk4CAp60m");
        dispatch(setCurrentUser(userCredential.user.providerData[0]));
        navigate("/profile/profile-home");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          setErrorCredentials("Email ou Mot de passe invalide");
        }
      });
  };
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    emailRef.current.focus();
    const emailStorage = localStorage.getItem("email");
    const passwordStorage = localStorage.getItem("password");

    if (emailStorage && passwordStorage) {
      emailRef.current.value = emailStorage;
      passwordRef.current.value = passwordStorage;
      setIsChecked(true);
    }
  }, []);

  return (
    <ClassicLoginFormStyled onSubmit={(e) => handleSignIn(e)} ref={formRef}>
      {inputFieldsSignIn(emailRef, passwordRef, userEmail).map(
        (field, index) => (
          <InputLogIn key={index} field={field} />
        )
      )}
      <span>{errorCredentials}</span>
      <PrimaryButton className="primary-button" label="CONNEXION" />
      <RememberCheckbox onChange={handleChecked} checked={isChecked} />
    </ClassicLoginFormStyled>
  );
}

const ClassicLoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  span {
    display: block;
    color: red;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 5px;
  }
  .primary-button {
    font-size: 0.9rem;
    padding: 15px 45px;
  }
`;
