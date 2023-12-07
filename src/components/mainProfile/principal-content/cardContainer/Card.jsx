import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import InfosCard from "../../../reusable-ui/InfosCard";
import CardButtons from "./CardButtons";
import {
  handleDeleteCard,
  handleRecoverDataAfterClickingOnACard,
} from "../../../../features/profile/museumsSlice";
import { deleteOneToBasket } from "../../../../features/profile/basketSlice";
import { setIsDetailsPanelDisplayed } from "../../../../features/profile/displaySettingsSlice";

export default function Card({ data }) {
  const {
    identifiant_museofile,
    url_image,
    nom_officiel_du_musee,
    commune,
    isClicked,
  } = data;
  const { isNavSwitchButtonActived, isDetailsPanelDisplayed } = useSelector(
    (state) => state.displaySettings
  );
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(handleDeleteCard(identifiant_museofile));
    dispatch(deleteOneToBasket(identifiant_museofile));
  };

  const handleClick = (id, e) => {
    if (!e.target.closest("button") || e.target.closest(".delete-card")) {
      dispatch(handleRecoverDataAfterClickingOnACard(id));

      if (!isDetailsPanelDisplayed) {
        dispatch(setIsDetailsPanelDisplayed());
      }
    }
  };

  const cardBackground = {
    backgroundColor: !isNavSwitchButtonActived ? "#f6e9f6" : "white",
  };

  return (
    <CardStyled
      onClick={(e) => handleClick(identifiant_museofile, e)}
      style={cardBackground}
    >
      {isNavSwitchButtonActived && (
        <TiDelete className="delete-card" onClick={handleDelete} />
      )}
      <InfosCard
        image={url_image}
        name={nom_officiel_du_musee}
        city={commune}
      />
      <CardButtons data={data} />
    </CardStyled>
  );
}

const CardStyled = styled.article`
  background-color: white;
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
