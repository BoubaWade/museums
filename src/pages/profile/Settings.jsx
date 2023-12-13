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
  width: 100vw;
`;
