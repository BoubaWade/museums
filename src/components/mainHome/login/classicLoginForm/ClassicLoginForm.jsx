import styled from "styled-components";
import useChecked from "../../../../hooks/useChecked.js";
import RememberCheckbox from "./RememberCheckbox.jsx";
import useSignIn from "../../../../hooks/useSignIn.js";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";
import InputLogIn from "./InputLogIn.jsx";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { inputFieldsSignIn } from "../../../../config/config.js";
import { setCredentialsLocalStorage } from "../../../../utils/user.js";

export default function ClassicLoginForm() {
  const { userEmail, errorLogin } = useSelector((state) => state.sign);
  const { credentials, emailRef, passwordRef, handleSignIn } = useSignIn();
  const { isChecked, setIsChecked } = useChecked(emailRef, passwordRef);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChecked) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      setCredentialsLocalStorage(email, password);
    } else {
      localStorage.removeItem("password");
    }
    handleSignIn(credentials);
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
