import styled from "styled-components";
import Overlay from "../reusable-ui/Overlay";
import FormUpdateCard from "./FormUpdateCard";
import { TiDeleteOutline } from "react-icons/ti";
import InfosCard from "../reusable-ui/InfosCard";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setIsDisplayUpdateCardModal } from "../../features/profile/displaySettingsSlice";

export default function UpdateCardModal() {
  const dataUpdatedCard = useSelector((state) => state.museums.dataUpdatedCard);
  const [cardDatas, setCardDatas] = useState(dataUpdatedCard);
  const dispatch = useDispatch();

  const handleDataChange = (newData) => {
    setCardDatas(newData);
  };

  return (
    <UpdateCardModalStyled>
      <Overlay
        className="overlay-card-updated"
        onClick={() => {
          dispatch(setIsDisplayUpdateCardModal(false));
        }}
      />
      <div className="update-card-container">
        <TiDeleteOutline
          className="close-modal"
          onClick={() => dispatch(setIsDisplayUpdateCardModal(false))}
        />
        <InfosCard
          className="infos-card"
          image={cardDatas.url_image}
          name={cardDatas.nom_officiel_du_musee}
          city={cardDatas.commune}
        />
        <FormUpdateCard cardDatas={cardDatas} onDataChange={handleDataChange} />
      </div>
    </UpdateCardModalStyled>
  );
}

const UpdateCardModalStyled = styled.div`
  display: flex;
  justify-content: center;
  .update-card-container {
    position: absolute;
    max-width: 620px;
    width: 50%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-radius: 15px;
    border: 3px solid #b659b6;
    z-index: 1;
    .close-modal {
      position: absolute;
      font-size: 35px;
      color: #b659b6;
      right: 5px;
      top: 5px;
      cursor: pointer;
    }
    .infos-card {
      width: 250px;
      height: 320px;
      background-color: white;
      border: 2px solid #b659b6;
      margin-bottom: 50px;
      padding: 5px 20px 20px;
      border-radius: 15px;
    }
  }
  .overlay-card-updated {
    opacity: 90%;
  }
`;
