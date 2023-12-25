import styled from "styled-components";
import BasketItem from "./BasketItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setBasket } from "../../../features/profile/basketSlice.js";

export default function BasketList() {
  const { basket } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const basketLocalStorage = localStorage.getItem("Basket");
  //   dispatch(setBasket(JSON.parse(basketLocalStorage)));
  // }, []);

  return (
    <BasketListStyled>
      {basket.length > 0 ? (
        basket.map((data) => {
          return <BasketItem key={data.identifiant_museofile} data={data} />;
        })
      ) : (
        <p className="empty-cards">Pas de musées réservés</p>
      )}
    </BasketListStyled>
  );
}
const BasketListStyled = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 10px;
  margin: 60px 0 30px;
  .empty-cards {
    font-size: 17px;
    color: #000000b5;
  }
`;
