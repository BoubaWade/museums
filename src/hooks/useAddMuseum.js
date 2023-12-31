import { useState } from "react";
import { useDispatch } from "react-redux";
import { getEmailLocalStorage } from "../utils/user";
import { handleAddMuseum, setMuseums } from "../features/profile/museumsSlice";
import { getMuseumsInFirestore } from "../Firebase/firebaseUtilities";
import { setIsAddSectionDisplayed } from "../features/profile/displaySettingsSlice";

export default function useAddMuseum(dataRecovered) {
  const userEmail = getEmailLocalStorage();
  const [isAddMuseumSuccessfull, setIsAddMuseumSuccessfull] = useState(false);
  const dispatch = useDispatch();

  const addOneToMuseums = async () => {
    dispatch(handleAddMuseum(dataRecovered));
    setIsAddMuseumSuccessfull(true);
    const museumsList = await getMuseumsInFirestore(userEmail);
    dispatch(setMuseums(museumsList));

    dispatch(setIsAddSectionDisplayed(true));
    setTimeout(() => {
      dispatch(setIsAddSectionDisplayed(false));
    }, 2000);
  };
  return { isAddMuseumSuccessfull, addOneToMuseums };
}
