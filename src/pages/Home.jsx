import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import NavBar from "../components/navBarHome/NavBarHome";
import MainHome from "../components/mainHome/MainHome";
import SignUpModal from "../components/mainHome/signUp/SignUpModal.jsx";
import { useSelector } from "react-redux";

export default function Home() {
  const isToggleModal = useSelector((state) => state.sign.isToggleModal);

  return (
    <HomeSlyled>
      <BackgroundImage />
      <NavBar />
      {isToggleModal ? <SignUpModal /> : <MainHome />}
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
`;
