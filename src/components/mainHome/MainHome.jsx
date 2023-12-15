import styled from "styled-components";
import LoginForm from "./login/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginForm } from "../../features/sign/signSlice";
import ButtonDisplayForm from "../reusable-ui/ButtonDisplayForm.jsx";

export default function Main() {
  const isToggleLoginForm = useSelector(
    (state) => state.sign.isToggleLoginForm
  );
  const dispatch = useDispatch();
  return (
    <MainStyled>
      <h1>Museums</h1>
      <LoginForm />
      {isToggleLoginForm ? (
        <ButtonDisplayForm
          label="Se connecter avec Facebook ou Google"
          onClick={() => dispatch(toggleLoginForm())}
        />
      ) : (
        <ButtonDisplayForm
          label="Se connecter avec E-mail"
          onClick={() => dispatch(toggleLoginForm())}
        />
      )}
    </MainStyled>
  );
}
const MainStyled = styled.div`
  /* height: calc(100vh - 70px); */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  h1 {
    width: 100%;
    font-family: "Berkshire Swash", cursive;
    font-size: 6rem;
    text-align: center;
    background: linear-gradient(to right, pink, #b659b6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 30px;
  }
`;
