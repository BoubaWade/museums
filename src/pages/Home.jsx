import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import NavBar from "../components/navBarHome/NavBarHome";
import MainHome from "../components/mainHome/MainHome";
import SignUpModal from "../components/mainHome/signUp/SignUpModal.jsx";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { modalSignUpAnimation } from "../animations/animations.js";
import Carrousel from "../components/mainHome/carrousel/Carrousel.jsx";

export default function Home() {
  const { isToggleModal } = useSelector((state) => state.sign);
  const { isToggleCarrousel } = useSelector((state) => state.displaySettings);

  return (
    <HomeSlyled>
      <BackgroundImage />
      <NavBar />
      <h1>Museums</h1>
      {isToggleModal ? (
        <TransitionGroup className="transition-group">
          <CSSTransition appear classNames="modal-signUp" timeout={500}>
            <SignUpModal />
          </CSSTransition>
        </TransitionGroup>
      ) : isToggleCarrousel ? (
        <Carrousel />
      ) : (
        <MainHome />
      )}
    </HomeSlyled>
  );
}

const HomeSlyled = styled.div`
  max-width: 1500px;
  max-height: 900px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
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
  ${modalSignUpAnimation}
`;
