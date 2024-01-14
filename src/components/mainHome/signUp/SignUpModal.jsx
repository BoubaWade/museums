import styled from "styled-components";
import SignUpForm from "./signUpForm/SignUpForm.jsx";
import Overlay from "../../reusable-ui/Overlay.jsx";
import { TiDeleteOutline } from "react-icons/ti";
import { toggleSignUpForm } from "../../../features/sign/signSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SignUpModal() {
  const dispatch = useDispatch();
  const { isRegistered } = useSelector((state) => state.sign);

  return (
    <SignUpModalStyled>
      <Overlay
        dataTestid="overlay-signUp-modal"
        onClick={() => dispatch(toggleSignUpForm())}
      />
      <div className="form-container">
        <TiDeleteOutline
          className="close-modal"
          onClick={() => dispatch(toggleSignUpForm())}
          tabIndex={0}
        />
        {isRegistered ? (
          <p data-testid="success"> INSCRIPTION VALIDÉ !</p>
        ) : (
          <SignUpForm />
        )}
      </div>
    </SignUpModalStyled>
  );
}

const SignUpModalStyled = styled.div`
  max-width: 1500px;
  max-height: 900px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  .form-container {
    width: 500px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translateX(-50%);
    z-index: 1;
    border: 2px solid #b659b6;
    margin: 0 auto;
    border-radius: 15px;
    p {
      font-size: 2rem;
      font-weight: 500;
      color: white;
      text-align: center;
      letter-spacing: 1px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .close-modal {
      font-size: 2rem;
      color: #b659b6;
      margin: 10px 0 0 10px;
      cursor: pointer;
      &:hover {
        color: #ff0000c5;
      }
      &:active {
        color: white;
      }
    }
  }
`;
