import styled from "styled-components";
import InfosCard from "../../../reusable-ui/InfosCard.jsx";
import FormAddCard from "./FormAddCard";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsAddSectionDisplayed } from "../../../../features/profile/displaySettingsSlice";

export default function AddCardSection() {
  const { museumRecoveredAfterClick } = useSelector((state) => state.museums);
  const [dataRecovered, setDataRecovered] = useState(museumRecoveredAfterClick);
  const { url_image, nom, commune } = dataRecovered;
  const dispatch = useDispatch();

  return (
    <AddCardSectionStyled>
      <TiDeleteOutline
        className="close-section"
        onClick={() => dispatch(setIsAddSectionDisplayed(false))}
      />
      <InfosCard
        className="infos-card"
        image={url_image ? url_image : ""}
        name={nom}
        city={commune}
      />
      <FormAddCard
        dataRecovered={dataRecovered}
        setDataRecovered={setDataRecovered}
      />
    </AddCardSectionStyled>
  );
}

const AddCardSectionStyled = styled.section`
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 500px;
  height: 570px;
  margin: 40px auto;
  border-radius: 10px;
  box-shadow: 4px 2px 20px 2px rgba(179, 179, 179, 0.75);
  .infos-card {
    background: white;
    width: 250px;
    height: 315px;
    margin: 20px 0 30px;
    padding: 10px 10px 30px;
    box-shadow: 4px 2px 20px 2px rgba(179, 179, 179, 0.75);
    border-radius: 10px;
  }
  .close-section {
    position: absolute;
    font-size: 30px;
    color: #b659b6;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`;
