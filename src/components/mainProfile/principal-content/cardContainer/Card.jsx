import styled from "styled-components";
import CardButtons from "./CardButtons";
import InfosCard from "../../../reusable-ui/InfosCard";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { setIsDetailsPanelDisplayed } from "../../../../features/profile/displaySettingsSlice";
import { handleRecoverDataAfterClick } from "../../../../features/profile/museumsSlice";
import useMuseums from "../../../../hooks/useMuseums";

export default function Card({ data }) {
  const { id, url_image, nom, commune } = data;
  const { isNavSwitchButtonActived, isDetailsPanelDisplayed } = useSelector(
    (state) => state.displaySettings
  );
  const cardBackground = {
    backgroundColor: !isNavSwitchButtonActived && "#f3a3f333",
  };
  const { deleteOneToMuseums } = useMuseums();
  const dispatch = useDispatch();

  const handleClickOnACardBody = (e, id) => {
    if (!e.target.closest("button") || e.target.closest(".delete-card")) {
      dispatch(handleRecoverDataAfterClick(id));

      if (!isDetailsPanelDisplayed) {
        dispatch(setIsDetailsPanelDisplayed());
      }
    }
  };

  const handleClickToDeleteMuseum = async (e) => {
    e.stopPropagation();
    deleteOneToMuseums(id);
  };

  return (
    <CardStyled
      onClick={(e) => handleClickOnACardBody(e, id)}
      style={cardBackground}
    >
      {isNavSwitchButtonActived && (
        <TiDelete
          className="delete-card"
          onClick={(e) => handleClickToDeleteMuseum(e)}
        />
      )}
      <InfosCard image={url_image} name={nom} city={commune} />
      <CardButtons data={data} />
    </CardStyled>
  );
}

const CardStyled = styled.article`
  position: relative;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 4px 2px 20px 2px rgba(179, 179, 179, 0.75);
  cursor: pointer;
  transition: 0.05s ease-in-out;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 5px 3px #b659b6;
  }
  .delete-card {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #ff0000b2;
    font-size: 30px;
    &:hover {
      color: red;
    }
    &:active {
      color: #b659b6;
    }
  }
`;
