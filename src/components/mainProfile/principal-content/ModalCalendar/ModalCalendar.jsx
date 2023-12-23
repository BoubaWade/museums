import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import styled from "styled-components";
import Overlay from "../../../reusable-ui/Overlay.jsx";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import {
  setIsBasketDisplayed,
  setShowModalCalendar,
} from "../../../../features/profile/displaySettingsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addOneMuseumToBasket,
  setIsReserved,
} from "../../../../features/profile/basketSlice.js";
import CalendarValidationButton from "../../../reusable-ui/CalendarValidationButton.jsx";
import { getFormatedDate } from "../../../../utils/utils.js";
import { getDatasMuseumsInFirestore } from "../../../../Firebase/firebaseUtilities.jsx";
import { setDatasMuseums } from "../../../../features/profile/museumsSlice.js";

export default function ModalCalendar() {
  const { dataRecoveredAfterClickingOnACard } = useSelector(
    (state) => state.museums
  );

  const { isReserved } = useSelector((state) => state.basket);
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const dateFormated = getFormatedDate(value);

  const datasRecoveredWithDatePicked = {
    ...dataRecoveredAfterClickingOnACard,
    datePicked: dateFormated,
  };

  const handleAddItemAndOpenBasket = async () => {
    dispatch(
      addOneMuseumToBasket(datasRecoveredWithDatePicked.identifiant_museofile)
    );
    const museumsList = await getDatasMuseumsInFirestore();
    if (museumsList) {
      dispatch(setDatasMuseums(museumsList));
    }

    dispatch(setIsBasketDisplayed(true));

    dispatch(setShowModalCalendar(true));
    dispatch(setIsReserved(true));
    setTimeout(() => {
      dispatch(setShowModalCalendar(false));
      dispatch(setIsReserved(false));
    }, 1000);
  };

  return (
    <ModalCalendarStyled>
      <Overlay className="overlay-calendar" />
      <div className="calendar-container">
        <TiDelete
          className="close-modal"
          tabIndex={0}
          onClick={() => dispatch(setShowModalCalendar(false))}
        />
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
          onClick={handleAddItemAndOpenBasket}
        />
      </div>
    </ModalCalendarStyled>
  );
}

const ModalCalendarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 70px);
  max-width: 1500px;
  max-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  .calendar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 2;
    .close-modal {
      position: absolute;
      font-size: 55px;
      color: #b659b6;
      top: 10px;
      cursor: pointer;
      &:hover {
        color: #ff0000c5;
      }
      &:active {
        color: white;
      }
    }
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
  }
  .overlay-calendar {
    height: calc(100vh - 70px);
    opacity: 100%;
    z-index: 1;
  }
`;
