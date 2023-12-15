import NavBarProfile from "../../components/navBarProfile/NavBarProfile.jsx";
import MainProfile from "../../components/mainProfile/MainProfile.jsx";
import UpdateCardModal from "../../components/updateCardModal/UpdateCardModal.jsx";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function ProfileHome() {
  const { isDisplayUpdateCardModal } = useSelector(
    (state) => state.displaySettings
  );
  return (
    <ProfileHomeStyled>
      <NavBarProfile />
      <MainProfile />
      {isDisplayUpdateCardModal && <UpdateCardModal />}
    </ProfileHomeStyled>
  );
}
const ProfileHomeStyled = styled.div`
  max-width: 1500px;
  max-height: 900px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;
