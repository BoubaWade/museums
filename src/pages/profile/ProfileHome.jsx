import NavBarProfile from "../../components/navBarProfile/NavBarProfile.jsx";
import MainProfile from "../../components/mainProfile/MainProfile.jsx";
import UpdateCardModal from "../../components/updateCardModal/UpdateCardModal.jsx";
import styled from "styled-components";
import useInitializeBasketAndMuseums from "../../hooks/useInitializeBasketAndMuseums.js";
import { useSelector } from "react-redux";
import { getEmailLocalStorage, getUserName } from "../../utils/user.js";

export default function ProfileHome() {
  const userEmail = getEmailLocalStorage();
  const userName = getUserName();
  const { isDisplayUpdateCardModal } = useSelector(
    (state) => state.displaySettings
  );

  useInitializeBasketAndMuseums(userEmail, userName);

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
