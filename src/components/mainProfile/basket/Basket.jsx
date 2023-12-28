import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setIsBasketDisplayed } from "../../../features/profile/displaySettingsSlice";
import styled from "styled-components";
import BasketList from "./BasketList";

export default function Basket() {
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
      <BasketList />
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
`;
