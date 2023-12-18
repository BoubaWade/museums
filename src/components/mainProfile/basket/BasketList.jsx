import styled from "styled-components";
import BasketItem from "./BasketItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataBasketInFirestore } from "../../../Firebase/firebaseUtilities.jsx";
import { useEffect } from "react";
import { addOneToBasket } from "../../../features/profile/basketSlice.js";

export default function BasketList() {
  const { datasItemsOfBasket } = useSelector((state) => state.basket);
  const { currentUser } = useSelector((state) => state.sign);
  const dispatch=useDispatch()

  console.log(datasItemsOfBasket);
  getUserDataBasketInFirestore(currentUser?.email?.split("@")[0]);
  // useEffect(()=>{
  //   dispatch(
  //     addOneToBasket(datasRecoveredWithDatePicked.identifiant_museofile)
  //   );
  // },[])
  

  return (
    <BasketListStyled>
      {datasItemsOfBasket.length > 0 ? (
        datasItemsOfBasket.map((data) => {
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
