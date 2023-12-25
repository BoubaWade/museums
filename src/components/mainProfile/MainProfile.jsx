import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setIsPopUpDisplayed } from "../../features/profile/displaySettingsSlice";
import Basket from "./basket/Basket";
import PrincipalContent from "./principal-content/PrincipalContent";
import MuseumDetailsPanel from "./museumDetailsPanel/MuseumDetailsPanel";
import { useEffect } from "react";
import { getMuseumsInFirestore } from "../../Firebase/firebaseUtilities";
import { setMuseums } from "../../features/profile/museumsSlice";
import { getLocalStorage } from "../../utils/utils";
import { setBasket } from "../../features/profile/basketSlice";

export default function MainProfile() {
  // const { isMainProfileRended } = useSelector((state) => state.displaySettings);
  // if (!isMainProfileRended) return;

  // const dispatch = useDispatch();
  const dispatch = useDispatch();

  // const initialiseMuseumsList = async () => {
  //   const museumsList = await getMuseumsInFirestore();
  //   if (museumsList) dispatch(setMuseums(museumsList));
  // };
  // const initialiseBasketList = async () => {
  //   const basketLocalStorage = getLocalStorage("Basket");
  //   dispatch(setBasket(basketLocalStorage));
  // };
  // const initialiseBasketAndMuseums = async () => {
  //   await initialiseMuseumsList();
  //   initialiseBasketList();
  // };

  // useEffect(() => {
  //   initialiseBasketAndMuseums();
  // }, []);


  return (
    <MainProfileStyled onClick={() => dispatch(setIsPopUpDisplayed(false))}>
      <Basket />
      <PrincipalContent />
      <MuseumDetailsPanel />
    </MainProfileStyled>
  );
}
const MainProfileStyled = styled.main`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 70px);
  top: 70px;
  display: flex;
  padding: 40px 0;
  overflow-x: hidden;
`;
