import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import "react-clock/dist/Clock.css";
import "react-time-picker/dist/TimePicker.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import styled from "styled-components";
import CalendarValidationButton from "../../../reusable-ui/CalendarValidationButton.jsx";
import useBasket from "../../../../hooks/useBasket.js";
import TimePicker from "react-time-picker";

export default function CalendarContainer() {
  const { addBasketItem } = useBasket();
  const { museumRecovered } = useSelector((state) => state.museums);
  const { isReserved } = useSelector((state) => state.basket);
  const [dateValue, setDateValue] = useState(new Date());
  const [hourValue, setHourValue] = useState("09:00");
  const moment = { date: dateValue, hour: hourValue };

  const handleAddBasketItem = async () => {
    addBasketItem(museumRecovered.id, moment);
  };

  return (
    <CalendarContainerStyled>
      <DatePicker
        value={dateValue}
        onChange={setDateValue}
        className="calendar"
        calendarClassName="calendar-className"
        minDate={new Date()}
        disabled
      />
      <Calendar
        value={dateValue}
        onChange={setDateValue}
        className="calendar"
      />
      <TimePicker
        className="time"
        clockClassName="clock-className"
        value={hourValue}
        onChange={setHourValue}
        minTime="09:00:00"
        maxTime="18:30:00"
      />
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
  .calendar,
  .time {
    color: #b659b6;
    background-color: white;
    max-width: 400px;
    min-width: 350px;
    width: 35%;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 10px;
    .react-date-picker__wrapper,
    .react-time-picker__wrapper {
      border: none;
    }
  }
  .calendar-className,
  .react-time-picker__clock {
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
