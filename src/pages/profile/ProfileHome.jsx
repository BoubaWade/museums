import NavBarProfile from "../../components/navBarProfile/NavBarProfile.jsx";
import MainProfile from "../../components/mainProfile/MainProfile.jsx";
import UpdateCardModal from "../../components/updateCardModal/UpdateCardModal.jsx";
import styled from "styled-components";
import useInitializeMuseums from "../../hooks/useInitializeMuseums.js";
import { useSelector } from "react-redux";
import { getEmailLocalStorage, getUserName } from "../../utils/user.js";
import { modalUpdateCardAnimation } from "../../animations/animations.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useEffect } from "react";

export default function ProfileHome() {
  const userEmail = getEmailLocalStorage();
  const userName = getUserName();
  const { initializeMuseums } = useInitializeMuseums(userEmail, userName);
  const { isDisplayUpdateCardModal } = useSelector(
    (state) => state.displaySettings
  );

  useEffect(() => {
    initializeMuseums();
  }, []);

  return (
    <ProfileHomeStyled>
      <NavBarProfile />
      <MainProfile />
      {isDisplayUpdateCardModal && (
        <TransitionGroup className="transition-group">
          <CSSTransition appear classNames="modal-update-card" timeout={500}>
            <UpdateCardModal />
          </CSSTransition>
        </TransitionGroup>
      )}
    </ProfileHomeStyled>
  );
}
const ProfileHomeStyled = styled.div`
  max-width: 1500px;
  max-height: 900px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  ${modalUpdateCardAnimation}
`;
