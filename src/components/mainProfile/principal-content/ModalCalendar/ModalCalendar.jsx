import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import styled from "styled-components";
import Overlay from "../../../reusable-ui/Overlay.jsx";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import {
  setIsMuseumsRendered,
  setShowModalCalendar,
} from "../../../../features/profile/displaySettingsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { addOneMuseumToBasket } from "../../../../features/profile/basketSlice.js";
import CalendarValidationButton from "../../../reusable-ui/CalendarValidationButton.jsx";
import { getFormatedDate } from "../../../../utils/utils.js";
import { getMuseumsInFirestore } from "../../../../Firebase/firebaseUtilities.jsx";
import { setMuseums } from "../../../../features/profile/museumsSlice.js";
import useModalCalendarValidation from "../../../../hooks/useModalCalendarValidation.js";

export default function ModalCalendar() {
  const userEmail = localStorage.getItem("email");
  const { museumRecoveredAfterClickingOnACard } = useSelector(
    (state) => state.museums
  );
  const { isReserved } = useSelector((state) => state.basket);
  const [value, onChange] = useState(new Date());
  const dateFormated = getFormatedDate(value);
  const dispatch = useDispatch();

  const datasWithDatePicked = {
    ...museumRecoveredAfterClickingOnACard,
    datePicked: dateFormated,
  };

  const handleAddItemAndOpenBasket = async () => {
    dispatch(addOneMuseumToBasket(datasWithDatePicked.identifiant_museofile));
    const museumsList = await getMuseumsInFirestore(userEmail);
    if (museumsList) {
      dispatch(setMuseums(museumsList));
    }
    useModalCalendarValidation(dispatch);
  };
  const handleCloseModalCalendar = () => {
    dispatch(setIsMuseumsRendered(true));
    dispatch(setShowModalCalendar(false));
  };

  return (
    <ModalCalendarStyled>
      <Overlay className="overlay-calendar" />
      <div className="calendar-container">
        <TiDelete
          className="close-modal"
          tabIndex={0}
          onClick={handleCloseModalCalendar}
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
