import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx";
import RememberCheckbox from "../../reusable-ui/RememberCheckbox.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSignInWithEmailAndPassword } from "../../../features/sign/signSlice";
import { inputFieldsSignIn } from "../../../config/config.js";
import InputLogIn from "./InputLogIn.jsx";
import { initialiseMyListMuseumsInFirestore } from "../../../Firebase/firebaseUtilities.jsx";

export default function ClassicLoginForm() {
  const { userEmail, errorLogin } = useSelector((state) => state.sign);
  // const [errorCredentials, setErrorCredentials] = useState("");
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

    const signIn = await dispatch(getSignInWithEmailAndPassword(credentials));
    if (signIn) {
      const email = localStorage.getItem("email");
      await initialiseMyListMuseumsInFirestore(email);
      navigate("/profile/profile-home");
    }
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
      {/* <span>{errorCredentials}</span> */}
      <span>{errorLogin}</span>
      <PrimaryButton className="primary-button" label="CONNEXION" />
      <RememberCheckbox
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
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
