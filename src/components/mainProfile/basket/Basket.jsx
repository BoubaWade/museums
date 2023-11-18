import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { setIsBasketDisplayed } from "../../../features/profile/displaySettingsSlice";
import BasketItem from "./BasketItem";

export default function Basket() {
  const { datasItemsOfBasket } = useSelector((state) => state.basket);
  const { isBasketDisplayed } = useSelector((state) => state.displaySettings);

  const width = {
    width: isBasketDisplayed ? "25%" : "0%",
    transition: "width 0.3s ease",
  };
  const dispatch = useDispatch();

  return (
    <BasketStyled style={width}>
      {isBasketDisplayed && (
        <BsFillArrowLeftSquareFill
          className="arrow-close-basket"
          onClick={() => dispatch(setIsBasketDisplayed(false))}
        />
      )}
      <section className="section-container">
        {datasItemsOfBasket.length > 0 ? (
          datasItemsOfBasket.map((data) => {
            return <BasketItem key={data.identifiant_museofile} data={data} />;
          })
        ) : (
          <p className="empty-cards">Pas de musées réservés</p>
        )}
      </section>
    </BasketStyled>
  );
}
const BasketStyled = styled.aside`
  position: relative;
  background-color: #f6e9f6;
  overflow-x: scroll;
  .arrow-close-basket {
    position: absolute;
    font-size: 40px;
    color: #b659b6;
    right: -2px;
    border-radius: 30px 0 0 30px;
    cursor: pointer;
  }
  .section-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
    margin: 60px 0 30px;
  }
  .empty-cards {
    font-size: 17px;
    color: #000000b5;
  }
`;
