import { getBasketLocalStorage } from "../utils/user";
import { useDispatch } from "react-redux";
import { getMuseumsInFirestore } from "../Firebase/firebaseUtilities";
import { setMuseums } from "../features/profile/museumsSlice";
import { setBasket } from "../features/profile/basketSlice";
import { useEffect } from "react";

export default function useInitializeBasketAndMuseums(userEmail, userName) {
  const dispatch = useDispatch();

  const initialiseMuseumsList = async () => {
    const museumsList = await getMuseumsInFirestore(userEmail);
    if (museumsList) dispatch(setMuseums(museumsList));
  };

  const initialiseBasketList = async () => {
    const basketLocalStorage = getBasketLocalStorage(userName);
    if (basketLocalStorage) dispatch(setBasket(basketLocalStorage));
  };

  const initialiseBasketAndMuseums = async () => {
    await initialiseMuseumsList();
    initialiseBasketList();
  };

  useEffect(() => {
    initialiseBasketAndMuseums();
  }, [userEmail, userName]);

  // return { initialiseBasketAndMuseums };
}
