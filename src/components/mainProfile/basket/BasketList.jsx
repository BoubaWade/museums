import { useSelector } from "react-redux";
import styled from "styled-components";
import BasketItem from "./basketItem/BasketItem";
const styleEmptyBasket = {
  position: "absolute",
  fontSize: "17px",
  color: "red",
  top: "10%",
  marginLeft: "20%",
};
export default function BasketList() {
  const { basket } = useSelector((state) => state.basket);

  if (basket.length === 0)
    return <div style={styleEmptyBasket}>Pas de musées réservés</div>;

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
`;
