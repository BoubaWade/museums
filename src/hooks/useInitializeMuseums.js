import { getBasketLocalStorage } from "../utils/user";
import { useDispatch } from "react-redux";
import { getMuseumsInFirestore } from "../Firebase/firebaseUtilities";
import { setMuseums } from "../features/profile/museumsSlice";
import { setBasket } from "../features/profile/basketSlice";

export default function useInitializeMuseums(userEmail, userName) {
  const dispatch = useDispatch();

  const initializeMuseumsList = async () => {
    const museumsList = await getMuseumsInFirestore(userEmail);
    if (museumsList) dispatch(setMuseums(museumsList));
  };

  const initializeBasketList = async () => {
    const basketLocalStorage = getBasketLocalStorage(userName);
    if (basketLocalStorage) dispatch(setBasket(basketLocalStorage));
  };

  const initializeMuseums = async () => {
    await initializeMuseumsList();
    initializeBasketList();
  };

  return { initializeMuseums };
}
