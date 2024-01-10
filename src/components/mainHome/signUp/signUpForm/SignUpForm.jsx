import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import useSignUp from "../../../../hooks/useSignUp";
import InputsList from "./InputsList";
import {
  validateConfirmPassword,
  validateEmail,
  validatePasswordLength,
} from "../../../../utils/user";

export default function SignUpForm() {
  const { credentials, errorField, handleChange, handleSignUp } = useSignUp();
  const { email, password, confirmPassword } = credentials;
  const isValidEmail = validateEmail(email);
  const isValidPasswordLength = validatePasswordLength(password);
  const isValidConfirmPassword = validateConfirmPassword(
    password,
    confirmPassword
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSignUp();
  };

  return (
    <SignUpFormStyled
      data-testid="sign-up-form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2>CRÉER UN COMPTE</h2>
      <InputsList
        credentials={credentials}
        errorField={errorField}
        handleChange={handleChange}
      />
      <PrimaryButton
        dataTestId="submit-button"
        className="submit-signUp-form-button"
        label="VALIDER"
        disabled={
          !isValidEmail || !isValidPasswordLength || !isValidConfirmPassword
        }
      />
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
  .submit-signUp-form-button {
    font-size: 0.9rem;
    padding: 15px 45px;
  }
`;
