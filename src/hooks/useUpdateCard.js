import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleUpdateMuseum,
  setMuseums,
} from "../features/profile/museumsSlice";
import { getEmailLocalStorage } from "../utils/user";
import { getMuseumsInFirestore } from "../Firebase/firebaseUtilities";
import { setIsDisplayUpdateCardModal } from "../features/profile/displaySettingsSlice";

export default function useUpdateCard(cardDatas, onDataChange) {
  const [dataUpdated, setDataUpdated] = useState(cardDatas);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    onDataChange(dataUpdated);
  }, [dataUpdated]);

  const handleUpdate = async () => {
    dispatch(handleUpdateMuseum(dataUpdated));
    const userEmail = getEmailLocalStorage();
    const museumsList = await getMuseumsInFirestore(userEmail);
    dispatch(setMuseums(museumsList));

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      dispatch(setIsDisplayUpdateCardModal(false));
    }, 1000);
  };

  return { dataUpdated, setDataUpdated, isSubmitted, handleUpdate };
}
