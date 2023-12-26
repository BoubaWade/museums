import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import styled from "styled-components";
import { useState } from "react";
import CalendarValidationButton from "../../../reusable-ui/CalendarValidationButton.jsx";
import { getFormatedDate } from "../../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addOneMuseumToBasket } from "../../../../features/profile/basketSlice";
import { getMuseumsInFirestore } from "../../../../Firebase/firebaseUtilities";
import { setMuseums } from "../../../../features/profile/museumsSlice";
import useModalCalendarValidation from "../../../../hooks/useModalCalendarValidation";

export default function CalendarContainer() {
  const { museumRecovered } = useSelector((state) => state.museums);
  const { isReserved } = useSelector((state) => state.basket);
  const userEmail = localStorage.getItem("email");
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();

  const dateFormated = getFormatedDate(value);
  const datasWithDatePicked = {
    ...museumRecovered,
    datePicked: dateFormated,
  };
  const handleAddItemAndOpenBasket = async () => {
    dispatch(addOneMuseumToBasket(datasWithDatePicked.identifiant_museofile));
    const museumsList = await getMuseumsInFirestore(userEmail);
    dispatch(setMuseums(museumsList));
    useModalCalendarValidation(dispatch);
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
        onClick={handleAddItemAndOpenBasket}
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
