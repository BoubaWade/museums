import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import InfosCard from "../../reusable-ui/InfosCard";
import { FaImage, FaCity } from "react-icons/fa";
import { MdOutlineMuseum } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { handleAddMuseum } from "../../../features/profile/museumsSlice";
import { setIsAddSectionDisplayed } from "../../../features/profile/displaySettingsSlice";

export default function AddCardSection() {
  const dataRecoveredAfterClick = useSelector(
    (state) => state.museums.dataRecoveredAfterClick
  );
  const [data, setData] = useState(dataRecoveredAfterClick);
  const { nom_officiel_du_musee, commune } = data;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleAddMuseumAndCloseSection = () => {
    dispatch(handleAddMuseum(data));
    dispatch(setIsAddSectionDisplayed(false));
  };

  return (
    <AddCardSectionStyled>
      <TiDeleteOutline
        className="close-section"
        onClick={() => dispatch(setIsAddSectionDisplayed(false))}
      />
      <InfosCard
        className="infos-card"
        image={data.url_image}
        name={nom_officiel_du_musee}
        city={commune}
      />
      <div className="input-container">
        <FaImage className="icon" />
        <input
          type="text"
          className="input"
          placeholder="URL de l'image du musée"
          name="url_image"
          value={data.value}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-container">
        <MdOutlineMuseum className="icon" />
        <input
          type="text"
          className="input"
          placeholder="Nom du musée"
          name="nom_officiel_du_musee"
          value={data.nom_officiel_du_musee}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-container">
        <FaCity className="icon" />
        <input
          type="text"
          className="input"
          placeholder="Ville du musée"
          name="commune"
          value={data.commune}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <PrimaryButton
        className="add-button"
        label="Ajouter dans l'application"
        onClick={handleAddMuseumAndCloseSection}
      />
    </AddCardSectionStyled>
  );
}

const AddCardSectionStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 600px;
  height: 570px;
  margin: 40px auto;
  border-radius: 10px;
  box-shadow: 4px 2px 20px 2px rgba(179, 179, 179, 0.75);
  .close-section {
    position: absolute;
    font-size: 30px;
    color: #b659b6;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
  .infos-card {
    background: white;
    width: 250px;
    height: 315px;
    margin: 20px 0 30px;
    padding: 10px 10px 30px;
    box-shadow: 4px 2px 20px 2px rgba(179, 179, 179, 0.75);
    border-radius: 10px;
  }
  .input-container {
    position: relative;
    width: 85%;
    height: 45px;
    margin: 0 auto 10px;
    .input {
      width: 100%;
      height: 100%;
      padding: 0 40px;
      border: 2px solid #b659b6;
      border-radius: 5px;
      outline: none;
    }
    .icon {
      position: absolute;
      top: 50%;
      left: 10px;
      font-size: 20px;
      color: #b659b6;
      transform: translateY(-50%);
    }
  }
  .add-button {
    height: 40px;
    font-size: 14px;
    color: #000000b5;
    font-weight: 500;
    margin-bottom: 30px;
    padding: 0 15px;
  }
`;
