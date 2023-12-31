import { useSelector } from "react-redux";
import SignUpModal from "./signUp/SignUpModal";
import Carrousel from "./carrousel/Carrousel";
import MainHome from "./MainHome";
import styled from "styled-components";

export default function PrincipalContent() {
  const { isToggleSignUpForm } = useSelector((state) => state.sign);
  const { isToggleCarrousel } = useSelector((state) => state.displaySettings);

  const principal = isToggleCarrousel ? <Carrousel /> : <MainHome />;
  return (
    <PrincipalContentStyled>
      <h1>Museums</h1>
      {isToggleSignUpForm ? <SignUpModal /> : principal}
    </PrincipalContentStyled>
  );
}

const PrincipalContentStyled = styled.div`
  h1 {
    position: absolute;
    width: 100%;
    top: 60px;
    font-family: "Berkshire Swash", cursive;
    font-size: 5rem;
    text-align: center;
    background: linear-gradient(to right, pink, #b659b6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;
