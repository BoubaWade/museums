import { useSelector } from "react-redux";
import styled from "styled-components";
import BasketItem from "./basketItem/BasketItem";
import EmptyMuseums from "../../reusable-ui/EmptyMuseums";

export default function BasketList() {
  const { basket } = useSelector((state) => state.basket);

  if (basket.length === 0) return <EmptyMuseums word="réservés" />;

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
