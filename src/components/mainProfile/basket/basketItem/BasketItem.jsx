import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import Timer from "./Timer";
import BannerDatePicked from "./BannerDatePicked";
import useBasket from "../../../../hooks/useBasket";

export default function BasketItem({ basketItem }) {
  const { id, nom, commune } = basketItem;
  const { deleteBasketItem } = useBasket();

  const handleDeleteBasketItem = () => {
    deleteBasketItem(id);
  };

  return (
    <BasketItemStyled>
      <h3>{nom.toUpperCase()}</h3>
      <p>{commune}</p>
      <MdDelete className="icon-delete" onClick={handleDeleteBasketItem} />
      <Timer />
      <BannerDatePicked basketItem={basketItem} />
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
  box-shadow: 2px 2px 10px 2px rgba(179, 179, 179, 0.75);
  overflow: hidden;
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
  &:hover {
    .icon-delete {
      display: block;
    }
  }
`;
