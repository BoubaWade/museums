import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import useSignUp from "../../../../hooks/useSignUp";
import InputsList from "./InputsList";

export default function SignUpForm() {
  const { credentials, errorField, handleChange, handleSignUp } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSignUp();
  };

  return (
    <SignUpFormStyled onSubmit={(e) => handleSubmit(e)}>
      <h2>CRÉER UN COMPTE</h2>
      <InputsList
        credentials={credentials}
        errorField={errorField}
        handleChange={handleChange}
      />
      <PrimaryButton
        className="submit-signUp-form-button"
        label="VALIDER"
        dataTestId="submit-signUp-form-button"
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
