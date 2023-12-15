import styled from "styled-components";
import SocialMediaForm from "./socialMedias/SocialMediaForm";
import ClassicLoginForm from "./ClassicLoginForm";
import { useSelector } from "react-redux";

export default function LoginForm() {
  const isToggleLoginForm = useSelector(
    (state) => state.sign.isToggleLoginForm
  );

  return (
    <LoginFormStyled>
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
`;
