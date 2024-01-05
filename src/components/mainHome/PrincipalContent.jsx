import { useSelector } from "react-redux";
import SignUpModal from "./signUp/SignUpModal";
import Carrousel from "./carrousel/Carrousel";
import MainHome from "./MainHome";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Loader from "../reusable-ui/Loader.jsx";
const homeLoaderStyle = {
  width: "300px",
  height: "300px",
  border: "15px solid rgba(0, 0, 0, 0.1)",
  borderTop: "15px solid #b659b6",
};

export default function PrincipalContent() {
  const { isToggleSignUpForm } = useSelector((state) => state.sign);
  const { isToggleCarrousel } = useSelector((state) => state.displaySettings);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  if (isLoading) return <Loader style={homeLoaderStyle} />;
  const principalContent = isToggleCarrousel ? <Carrousel /> : <MainHome />;

  return (
    <PrincipalContentStyled>
      <h1>Museums</h1>
      {isToggleSignUpForm ? <SignUpModal /> : principalContent}
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
