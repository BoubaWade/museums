import styled from "styled-components";
import BackgroundImage from "../../components/BackgroundImage.jsx";
import NavBarHome from "../../components/navBarHome/NavBarHome.jsx";
import PrincipalContent from "../../components/mainHome/PrincipalContent.jsx";

export default function Home() {
  return (
    <HomeSlyled>
      <BackgroundImage />
      <NavBarHome />
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
