import NavBarProfile from "../../components/navBarProfile/NavBarProfile.jsx";
import MainProfile from "../../components/mainProfile/MainProfile.jsx";
import UpdateCardModal from "../../components/updateCardModal/UpdateCardModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { getMuseumsInFirestore } from "../../Firebase/firebaseUtilities.jsx";
import { setMuseums } from "../../features/profile/museumsSlice.js";
import { setBasket } from "../../features/profile/basketSlice.js";
import { getLocalStorage } from "../../utils/utils.js";

export default function ProfileHome() {
  const userEmail = localStorage.getItem("email");
  const { isDisplayUpdateCardModal } = useSelector(
    (state) => state.displaySettings
  );
  const dispatch = useDispatch();

  const initialiseMuseumsList = async () => {
    const museumsList = await getMuseumsInFirestore(userEmail);

    if (museumsList) dispatch(setMuseums(museumsList));
  };
  const initialiseBasketList = async () => {
    const basketLocalStorage = getLocalStorage("Basket");
    if (basketLocalStorage) dispatch(setBasket(basketLocalStorage));
  };
  const initialiseBasketAndMuseums = async () => {
    await initialiseMuseumsList();
    initialiseBasketList();
  };

  useEffect(() => {
    initialiseBasketAndMuseums();
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
