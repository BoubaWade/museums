import styled from "styled-components";
import BasketItem from "./BasketItem.jsx";
import { useSelector } from "react-redux";

export default function BasketList() {
  const { datasItemsOfBasket } = useSelector((state) => state.basket);

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
