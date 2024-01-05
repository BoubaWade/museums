import { setBasketLocalStorage } from "../utils/user";
import { useDispatch } from "react-redux";
import { getMuseumsInFirestore } from "../Firebase/firebaseUtilities";
import { setMuseums } from "../features/profile/museumsSlice";
import { setBasket } from "../features/profile/basketSlice";

export default function useInitializeMuseums(userEmail) {
  const dispatch = useDispatch();

  const initializeMuseumsAndBasketList = async () => {
    const museumsList = await getMuseumsInFirestore(userEmail);
    if (museumsList) {
      dispatch(setMuseums(museumsList));
      const basketList = museumsList.filter(
        (museum) => museum.isAdded === true
      );

      if (basketList) {
        dispatch(setBasket(basketList));
        setBasketLocalStorage(basketList);
      }
    }
  };

  const initializeMuseumsAndBasket = async () => {
    await initializeMuseumsAndBasketList();
  };

  return { initializeMuseumsAndBasket };
}
