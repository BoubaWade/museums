import { useRef, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx";
import RememberCheckbox from "../../reusable-ui/RememberCheckbox.jsx";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../../features/sign/signSlice.js";

export default function ClassicLoginForm() {
  const userEmail = useSelector((state) => state.sign.userEmail);
  const [errorCredentials, setErrorCredentials] = useState("");
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        dispatch(setCurrentUser(userCredential.user.providerData[0]));
        navigate("/profile/profile-home");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          setErrorCredentials("Email ou Mot de passe invalide");
        }
      });
  };

  return (
    <ClassicLoginFormStyled onSubmit={(e) => handleSignIn(e)} ref={formRef}>
      <div className="input-container">
        <input
          type="email"
          className="input"
          defaultValue={userEmail}
          placeholder="E-mail"
          ref={emailRef}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          className="input"
          placeholder="Mot de passe"
          ref={passwordRef}
        />
      </div>
      <span>{errorCredentials}</span>
      <PrimaryButton className="primary-button" label="CONNEXION" />
      <RememberCheckbox />
    </ClassicLoginFormStyled>
  );
}

const ClassicLoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .input-container {
    position: relative;
    margin: 0 auto 25px;
    .input {
      width: 250px;
      height: 50px;
      font-size: 1rem;
      text-align: center;
      border-radius: 5px;
      outline: none;
      border: none;
      &::placeholder {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        color: gray;
        text-align: center;
      }
      &:focus {
        box-shadow: 2px 2px 2px 2px #b659b6;
      }
    }
  }
  span {
    display: block;
    color: red;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 5px;
  }
  .primary-button {
    /* margin: 20px auto 0; */
    font-size: 0.9rem;
    padding: 15px 45px;
  }
`;
