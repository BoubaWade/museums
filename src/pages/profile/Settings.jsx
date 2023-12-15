import styled from "styled-components";
import NavBarSettings from "../../components/navBarSettings/NavBarSettings";
import MainSettings from "../../components/mainSettings/MainSettings";

export default function Settings() {
  return (
    <SettingsStyled>
      <NavBarSettings />
      <MainSettings />
    </SettingsStyled>
  );
}

const SettingsStyled = styled.div`
  max-width: 1500px;
  max-height: 900px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;
