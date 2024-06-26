import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import { useState } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  addOneMuseumToBasket,
  setIsReserved,
} from "../../features/profile/basketSlice";
import CalendarValidationButton from "../reusable-ui/CalendarValidationButton.jsx";
import { getFormatedDate } from "../../utils/utils";
import { setIsBasketDisplayed } from "../../features/profile/displaySettingsSlice.js";

export default function CalendarContent({ museumRecovered }) {
  const { isReserved } = useSelector((state) => state.basket);
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const dispatch = useDispatch();

  const dateFormated = getFormatedDate(value);
  const museumWithDatePicked = {
    ...museumRecovered,
    datePicked: dateFormated,
  };

  const handleValidateDatePicked = () => {
    dispatch(addOneMuseumToBasket(museumWithDatePicked.id));
    dispatch(setIsBasketDisplayed(true));

    setShowCalendar(false);
    dispatch(setIsReserved(true));
    setTimeout(() => {
      dispatch(setIsReserved(false));
    }, 1000);
  };

  return (
    <CalendarContentStyled>
      <p>Réserver votre date de visite</p>
      <DatePicker
        onChange={onChange}
        value={value}
        className="calendar"
        calendarClassName="calendar-className"
        onClick={() => {
          setShowCalendar(!showCalendar);
        }}
      />
      {showCalendar && (
        <Calendar onChange={onChange} value={value} className="calendar" />
      )}
      <CalendarValidationButton
        isReserved={isReserved}
        onClick={handleValidateDatePicked}
      />
    </CalendarContentStyled>
  );
}

const CalendarContentStyled = styled.div`
  padding: 0 10px;
  p {
    font-size: 16px;
    font-weight: 500;
    padding: 5px 0;
  }
  .calendar {
    background-color: #f6e9f6;
    width: 100%;
    border-radius: 5px;
    border: 1.5px solid #b659b65f;
    padding: 10px 15px;
    margin-bottom: 5px;
    .react-date-picker__wrapper {
      border: none;
    }
  }
  .calendar-className {
    display: none;
  }
  @media screen and (max-width: 860px) {
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
