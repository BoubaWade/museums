import { useDispatch } from "react-redux";
import {
  addOneMuseumToBasket,
  deleteOneToBasket,
  setBasket,
  setDatePicked,
  setHourPicked,
  setIsReserved,
} from "../features/profile/basketSlice";
import {
  getBasketLocalStorage,
  getEmailLocalStorage,
  getUserName,
} from "../utils/user";
import { getMuseumsInFirestore } from "../Firebase/firebaseUtilities";
import { setMuseums } from "../features/profile/museumsSlice";
import {
  setIsBasketDisplayed,
  setIsMuseumsRendered,
  setShowModalCalendar,
} from "../features/profile/displaySettingsSlice";
import { getFormatedDate } from "../utils/utils";

export default function useBasket() {
  const userEmail = getEmailLocalStorage();
  const dispatch = useDispatch();

  const deleteBasketItem = async (id) => {
    dispatch(deleteOneToBasket(id));
    const userName = getUserName();
    const basketLocalStorage = getBasketLocalStorage(userName);
    if (basketLocalStorage) dispatch(setBasket(basketLocalStorage));

    const museumsList = await getMuseumsInFirestore(userEmail);
    if (museumsList) dispatch(setMuseums(museumsList));
  };

  const addBasketItem = async (id, value) => {
    dispatch(setDatePicked(getFormatedDate(value.date)));
    dispatch(setHourPicked(value.hour));
    dispatch(addOneMuseumToBasket(id));

    dispatch(setIsBasketDisplayed(true));
    dispatch(setShowModalCalendar(true));
    dispatch(setIsReserved(true));

    setTimeout(() => {
      dispatch(setShowModalCalendar(false));
      dispatch(setIsReserved(false));
      dispatch(setIsMuseumsRendered(true));
    }, 1000);

    const museumsList = await getMuseumsInFirestore(userEmail);
    dispatch(setMuseums(museumsList));
  };

  return { deleteBasketItem, addBasketItem };
}
