import {
  setIsBasketDisplayed,
  setIsMuseumsRendered,
  setShowModalCalendar,
} from "../features/profile/displaySettingsSlice";
import { setIsReserved } from "../features/profile/basketSlice";

export default function useModalCalendarValidation(dispatch) {
  dispatch(setIsBasketDisplayed(true));
  dispatch(setShowModalCalendar(true));
  dispatch(setIsReserved(true));

  setTimeout(() => {
    dispatch(setShowModalCalendar(false));
    dispatch(setIsReserved(false));
    dispatch(setIsMuseumsRendered(true))

  }, 1000);
}
