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
      <div className="museum-infos">
        <h3>{nom.toUpperCase()}</h3>
        <p>{commune}</p>
      </div>
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
  height: 95px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 2px 2px 10px 2px rgba(179, 179, 179, 0.75);
  .museum-infos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0;
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
  @media screen and (max-width: 900px) {
    height: 140px;
    .museum-infos {
      flex-direction: column;
      h3 {
        font-size: 10px;
        width: 90%;
      }
    }
    .icon-delete {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 170px;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
    justify-content: space-around;
  }
  @media screen and (max-width: 500px) {
    height: 230px;
    .museum-infos {
      h3 {
        font-size: 9px;
        margin-bottom: 10px;
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      p {
        font-size: 10px;
      }
    }
    .icon-delete {
      position: absolute;
      bottom: 5px;
    }
  }
`;
