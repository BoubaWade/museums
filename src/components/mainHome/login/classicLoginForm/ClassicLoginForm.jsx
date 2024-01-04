import styled from "styled-components";
import useChecked from "../../../../hooks/useChecked.js";
import RememberCheckbox from "./RememberCheckbox.jsx";
import useSignIn from "../../../../hooks/useSignIn.js";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";
import InputLogIn from "./InputLogIn.jsx";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputFieldsSignIn } from "../../../../config/config.js";
import {
  getEmailLocalStorage,
  getPasswordLocalStorage,
  setCredentialsLocalStorage,
} from "../../../../utils/user.js";
import { useNavigate } from "react-router-dom";
import { getSignInWithEmailAndPassword } from "../../../../features/sign/signSlice.js";
import { initialiseMyListMuseumsInFirestore } from "../../../../Firebase/firebaseUtilities.js";

export default function ClassicLoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { userEmail, errorLogin } = useSelector((state) => state.sign);
  // const { isChecked, setIsChecked } = useChecked(emailRef, passwordRef);
  const [isChecked, setIsChecked] = useState(false);

  const formRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { handleSignIn } = useSignIn(emailRef, passwordRef);
  useEffect(() => {
    emailRef.current.focus();
    const emailStorage = getEmailLocalStorage();
    const passwordStorage = getPasswordLocalStorage();

    if (emailStorage && passwordStorage) {
      emailRef.current.value = emailStorage;
      passwordRef.current.value = passwordStorage;
      setIsChecked(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (isChecked) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      setCredentialsLocalStorage(email, password);
    } else {
      localStorage.removeItem("password");
    }
    dispatch(getSignInWithEmailAndPassword(credentials))
    .then(() => {
      // initialiseMyListMuseumsInFirestore(userEmail);
      navigate("/profile/profile-home");
    });
  };

  return (
    <ClassicLoginFormStyled onSubmit={(e) => handleSubmit(e)} ref={formRef}>
      {inputFieldsSignIn(emailRef, passwordRef, userEmail).map(
        (field, index) => (
          <InputLogIn key={index} field={field} />
        )
      )}
      <span>{errorLogin}</span>
      <PrimaryButton className="primary-button" label="CONNEXION" />
      <RememberCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
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
