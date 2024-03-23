import styled from "styled-components";
import SocialMediaForm from "./socialMedias/SocialMediaForm";
import ClassicLoginForm from "./classicLoginForm/ClassicLoginForm";
import { useSelector } from "react-redux";

export default function LoginForm() {
  const isToggleLoginForm = useSelector(
    (state) => state.sign.isToggleLoginForm
  );

  return (
    <LoginFormStyled data-testid="login-form">
      {isToggleLoginForm ? <ClassicLoginForm /> : <SocialMediaForm />}
    </LoginFormStyled>
  );
}
const LoginFormStyled = styled.div`
  position: relative;
  width: 450px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: 2px solid #b659b6;
  border-radius: 10px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 350px;
    margin-top: 40px;
  }
  @media screen and (max-width: 600px) {
    width: 360px;
    margin-top: 30px;
  }
  @media screen and (max-width: 425px) {
    width: 300px;
    height: 300px;
    margin-top: 10px;
  }
`;
