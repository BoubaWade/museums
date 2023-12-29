import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import styled from "styled-components";
import CalendarValidationButton from "../../../reusable-ui/CalendarValidationButton.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import useBasket from "../../../../hooks/useBasket.js";

export default function CalendarContainer() {
  const { addBasketItem } = useBasket();
  const { museumRecovered } = useSelector((state) => state.museums);
  const { isReserved } = useSelector((state) => state.basket);
  const [value, onChange] = useState(new Date());

  const handleAddBasketItem = async () => {
    addBasketItem(museumRecovered.id, value);
  };

  return (
    <CalendarContainerStyled>
      <DatePicker
        onChange={onChange}
        value={value}
        className="calendar"
        calendarClassName="calendar-className"
      />
      <Calendar onChange={onChange} value={value} className="calendar" />
      <CalendarValidationButton
        className="validation-button"
        isReserved={isReserved}
        onClick={handleAddBasketItem}
      />
    </CalendarContainerStyled>
  );
}

const CalendarContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 1;
  .calendar {
    color: #b659b6;
    background-color: white;
    max-width: 400px;
    min-width: 350px;
    width: 35%;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 10px;
    .react-date-picker__wrapper {
      border: none;
    }
  }
  .calendar-className {
    display: none;
  }
  .validation-button {
    max-width: 400px;
    min-width: 350px;
    width: 35%;
    height: 48px;
    font-size: 16px;
    margin: 0 auto;
  }
`;
