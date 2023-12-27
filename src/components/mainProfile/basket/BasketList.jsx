import styled from "styled-components";
import BasketItem from "./BasketItem.jsx";
import { useSelector } from "react-redux";

export default function BasketList() {
  const { basket } = useSelector((state) => state.basket);

  if (basket.length === 0)
    return <div className="empty-cards">Pas de musées réservés</div>;

  return (
    <BasketListStyled>
      {basket.map((basketItem) => (
        <BasketItem
          key={basketItem.id}
          basketItem={basketItem}
          className="item"
        />
      ))}
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
