import EditProfile from "./EditProfile";
import SettingsProfile from "./SettingsProfile";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function MainSettings() {
  const { showEditProfile, showSettingsProfile } = useSelector(
    (state) => state.displaySettings
  );

  return (
    <MainSettingsStyled>
      {showEditProfile && <EditProfile />}
      {showSettingsProfile && <SettingsProfile />}
    </MainSettingsStyled>
  );
}

const MainSettingsStyled = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
