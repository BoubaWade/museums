import styled from "styled-components";
import LoginForm from "./login/LoginForm";
import ButtonsDisplayLoginForm from "./ButtonsDisplayLoginForm.jsx";

export default function MainHome() {
  return (
    <MainHomeStyled>
      <LoginForm />
      <ButtonsDisplayLoginForm />
    </MainHomeStyled>
  );
}
const MainHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  h2 {
    width: 100%;
    font-family: "Berkshire Swash", cursive;
    font-size: 5rem;
    text-align: center;
    background: linear-gradient(to right, pink, #b659b6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 30px;
  }
`;
