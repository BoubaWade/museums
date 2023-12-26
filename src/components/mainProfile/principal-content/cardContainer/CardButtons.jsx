import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setIsDisplayUpdateCardModal,
  setIsMuseumsRendered,
  setShowModalCalendar,
} from "../../../../features/profile/displaySettingsSlice";
import {
  handleAddDataToUpdatedCard,
  handleRecoverDataAfterClick,
} from "../../../../features/profile/museumsSlice";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function CardButtons({ data }) {
  const { id, isAdded } = data;
  const { isNavSwitchButtonActived } = useSelector(
    (state) => state.displaySettings
  );
  const dispatch = useDispatch();

  const handleShowModalCalendarAndDispatchDataOfTheCard = (e) => {
    dispatch(setShowModalCalendar(true));
    dispatch(handleRecoverDataAfterClick(e.target.parentNode.id));
    dispatch(setIsMuseumsRendered(false));
  };

  const handleAddDataUpdatedAndOpenModal = () => {
    dispatch(handleAddDataToUpdatedCard(data));
    dispatch(setIsDisplayUpdateCardModal(true));
  };

  return (
    <CardButtonsStyled>
      {!isNavSwitchButtonActived ? (
        <PrimaryButton
          id={id}
          className={isAdded ? "confirm-add" : "add-button"}
          label={isAdded ? "Déja ajouté !" : "Réserver"}
          onClick={(e) => handleShowModalCalendarAndDispatchDataOfTheCard(e)}
        />
      ) : (
        <PrimaryButton
          className="edit-button"
          label="Modifier"
          onClick={handleAddDataUpdatedAndOpenModal}
        />
      )}
    </CardButtonsStyled>
  );
}

const CardButtonsStyled = styled.div`
  .add-button,
  .edit-button {
    color: #000000b5;
    width: 90px;
    height: 35px;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 10px;
    &:hover {
      background-color: white;
    }
  }
  .edit-button {
    background: white;
    color: #ff0000b2;
    border: 2px solid #ff0000b2;
    &:active {
      background: #0080008a;
      color: #000000b5;
    }
  }
  .confirm-add {
    pointer-events: none;
    background: none;
    height: 35px;
    color: #008000bc;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 5px;
    border: none;
  }
  .confirm-add.visible {
    display: block;
  }
`;
