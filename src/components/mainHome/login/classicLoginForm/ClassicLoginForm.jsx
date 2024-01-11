import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";
import InputLogIn from "./InputLogIn.jsx";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputFieldsSignIn } from "../../../../config/config.js";
import { useNavigate } from "react-router-dom";
import { getSignInWithEmailAndPassword } from "../../../../features/sign/signSlice.js";

export default function ClassicLoginForm() {
  const { userEmail, errorLogin } = useSelector((state) => state.sign);
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(getSignInWithEmailAndPassword(credentials)).then(() => {
      // initialiseMyListMuseumsInFirestore(userEmail);
      navigate("/profile/profile-home");
    });
  };

  return (
    <ClassicLoginFormStyled
      onSubmit={(e) => handleSubmit(e)}
      ref={formRef}
      data-testid="classic-form"
    >
      {inputFieldsSignIn(emailRef, passwordRef, userEmail).map(
        (field, index) => (
          <InputLogIn key={index} field={field} />
        )
      )}
      <span>{errorLogin}</span>
      <PrimaryButton className="primary-button" label="CONNEXION" />
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
