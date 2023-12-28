import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOneToBasket,
  setBasket,
} from "../../../features/profile/basketSlice";
import { useEffect, useState } from "react";
import { getMuseumsInFirestore } from "../../../Firebase/firebaseUtilities";
import { setMuseums } from "../../../features/profile/museumsSlice";
import {
  getBasketLocalStorage,
  getEmailLocalStorage,
  getUserName,
} from "../../../utils/user";
const NUMBER_OF_MILLISECOND_IN_ONE_MINUTE = 60000;

export default function BasketItem({ basketItem }) {
  const { id, nom, commune } = basketItem;
  // const datePicked = useSelector((state) => state.basket.datePicked);
  const { dataRecoveredWithDatePicked } = useSelector((state) => state.museums);
  const userEmail = getEmailLocalStorage();
  const [minutesElapsed, setMinutesElapsed] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesElapsed((prevMinutes) => prevMinutes + 1);
    }, NUMBER_OF_MILLISECOND_IN_ONE_MINUTE);

    return () => clearInterval(interval);
  }, []);

  const handleDeleteBasketItem = async () => {
    dispatch(deleteOneToBasket(id));
    const userName = getUserName();
    const basketLocalStorage = getBasketLocalStorage(userName);
    if (basketLocalStorage) dispatch(setBasket(basketLocalStorage));

    const museumsList = await getMuseumsInFirestore(userEmail);
    if (museumsList) {
      dispatch(setMuseums(museumsList));
    }
  };

  return (
    <BasketItemStyled>
      <h3>{nom.toUpperCase()}</h3>
      <p>{commune}</p>
      <MdDelete className="icon-delete" onClick={handleDeleteBasketItem} />
      <span className="minutes-elapsed">
        Ajouté il y'a
        {minutesElapsed === 1 ? " 1 minute" : ` ${minutesElapsed} minutes`}
      </span>
      <div>
        {basketItem.id === dataRecoveredWithDatePicked.id && (
          <span>{dataRecoveredWithDatePicked.datePicked}</span>
        )}
      </div>
    </BasketItemStyled>
  );
}

const BasketItemStyled = styled.article`
  position: relative;
  background-color: #0080008a;
  width: 90%;
  height: 85px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  h3,
  p {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 11px;
  }
  h3 {
    width: 65%;
  }
  p {
    width: 25%;
  }
  .icon-delete {
    display: none;
    color: #ff0000b2;
    width: 30px;
    font-size: 20px;
    cursor: pointer;
  }
  .minutes-elapsed {
    color: #b659b6;
    position: absolute;
    right: 10px;
    bottom: 2px;
    font-size: 11px;
  }
  &:hover {
    .icon-delete {
      display: block;
    }
  }
`;
