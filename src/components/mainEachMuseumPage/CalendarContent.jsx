import { useState } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  handleAddItemToBasket,
  handleRecoverDatePicked,
} from "../../features/profile/basketSlice";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { getFormatedDate } from "../../utils/utils";

export default function CalendarContent({ datasMuseumRecovered }) {
  const datasItemsOfBasket = useSelector(
    (state) => state.basket.datasItemsOfBasket
  );
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const dispatch = useDispatch();

  const dateFormated = getFormatedDate(value);

  const handleValidateDatePicked = () => {
    if (!datasItemsOfBasket.includes(datasMuseumRecovered)) {
      dispatch(handleAddItemToBasket(datasMuseumRecovered));
      // addOneToBasket(datasMuseumRecovered.identifiant_museofile);
      dispatch(handleRecoverDatePicked(dateFormated));
    }
    setShowCalendar(false);
  };
  return (
    <CalendarContentStyled>
      <p>Réserver votre date de visite</p>
      <DatePicker
        onChange={onChange}
        value={value}
        className="calendar"
        calendarClassName="calendar-className"
        // calendarIcon=""
        onClick={() => {
          setShowCalendar(!showCalendar);
        }}
      />
      {showCalendar && (
        <Calendar
          onChange={onChange}
          value={value}
          className="calendar"
          onClickDay={() => {
            setShowCalendar(!showCalendar);
          }}
        />
      )}
      <PrimaryButton
        id="validate-date"
        label="Valider"
        className="button-validate-date-Picker"
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
  #validate-date {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 10px;
  }
  .button-validate-date-Picker {
    width: 100%;
    height: 45px;
    font-size: 16px;
  }
`;
