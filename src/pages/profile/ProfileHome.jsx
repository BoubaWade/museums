import NavBarProfile from "../../components/navBarProfile/NavBarProfile.jsx";
import MainProfile from "../../components/mainProfile/MainProfile.jsx";
import UpdateCardModal from "../../components/updateCardModal/UpdateCardModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { getDatasMuseumsInFirestore } from "../../Firebase/firebaseUtilities.jsx";
import { setDatasMuseums } from "../../features/profile/museumsSlice.js";

export default function ProfileHome() {
  const { isDisplayUpdateCardModal } = useSelector(
    (state) => state.displaySettings
  );
  const dispatch = useDispatch();
  
  const getInitialMuseumsList = async () => {
    const museumsList = await getDatasMuseumsInFirestore();
    if (museumsList) {
      dispatch(setDatasMuseums(museumsList));
    }
  };

  useEffect(() => {
    getInitialMuseumsList();
  }, []);

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
