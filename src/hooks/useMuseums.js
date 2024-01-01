import { useState } from "react";
import { useDispatch } from "react-redux";
import { getEmailLocalStorage } from "../utils/user";
import {
  handleAddMuseum,
  handleDeleteMuseum,
  setMuseums,
} from "../features/profile/museumsSlice";
import { getMuseumsInFirestore } from "../Firebase/firebaseUtilities";
import { setIsAddSectionDisplayed } from "../features/profile/displaySettingsSlice";
import { deleteOneToBasket } from "../features/profile/basketSlice";

export default function useMuseums() {
  const userEmail = getEmailLocalStorage();
  const [isAddMuseumSuccessfull, setIsAddMuseumSuccessfull] = useState(false);
  const dispatch = useDispatch();

  const addOneToMuseums = async (data) => {
    dispatch(handleAddMuseum(data));
    setIsAddMuseumSuccessfull(true);
    const museumsList = await getMuseumsInFirestore(userEmail);
    dispatch(setMuseums(museumsList));

    dispatch(setIsAddSectionDisplayed(true));
    setTimeout(() => {
      dispatch(setIsAddSectionDisplayed(false));
    }, 1000);
  };

  const deleteOneToMuseums = async (id) => {
    dispatch(handleDeleteMuseum(id));
    const museumsList = await getMuseumsInFirestore(userEmail);
    dispatch(setMuseums(museumsList));

    dispatch(deleteOneToBasket(id));
  };
  return { isAddMuseumSuccessfull, addOneToMuseums, deleteOneToMuseums };
}
