import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import NavBar from "../components/navBarHome/NavBarHome";
import PrincipalContent from "../components/mainHome/PrincipalContent.jsx";

export default function Home() {
  return (
    <HomeSlyled>
      <BackgroundImage />
      <NavBar />
      <PrincipalContent />
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
