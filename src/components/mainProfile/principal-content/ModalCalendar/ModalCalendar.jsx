import styled, { keyframes } from "styled-components";
import Overlay from "../../../reusable-ui/Overlay.jsx";
import { TiDelete } from "react-icons/ti";
import {
  setIsMuseumsRendered,
  setShowModalCalendar,
} from "../../../../features/profile/displaySettingsSlice.js";
import { useDispatch } from "react-redux";
import CalendarContainer from "./CalendarContainer.jsx";

export default function ModalCalendar() {
  const dispatch = useDispatch();

  const handleCloseModalCalendar = () => {
    dispatch(setIsMuseumsRendered(true));
    dispatch(setShowModalCalendar(false));
  };

  return (
    <ModalCalendarStyled>
      <Overlay className="overlay-calendar" />
      <TiDelete className="close-modal" onClick={handleCloseModalCalendar} />
      <CalendarContainer />
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
  .close-modal {
    position: absolute;
    font-size: 55px;
    color: #b659b6;
    top: 10px;
    z-index: 2;
    cursor: pointer;
    &:hover {
      color: #ff0000c5;
    }
    &:active {
      color: white;
    }
  }
  .overlay-calendar {
    height: calc(100vh - 70px);
    opacity: 100%;
    z-index: 1;
  }
`;
