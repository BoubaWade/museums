import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import InfosCard from "../../../reusable-ui/InfosCard";
import imageStop from "../../../../assets/images/imageStop.jpeg";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { handleAddMuseum } from "../../../../features/profile/museumsSlice";
import { setIsAddSectionDisplayed } from "../../../../features/profile/displaySettingsSlice";
import InputsContainer from "./InputsContainer";
import { getAllMuseumsId } from "../../../../utils/utils";

export default function AddCardSection() {
  const { datasMuseums, dataRecoveredAfterClick } = useSelector(
    (state) => state.museums
  );

  const [data, setData] = useState(dataRecoveredAfterClick);
  const { identifiant_museofile, nom_officiel_du_musee, commune } = data;
  const [successToAddMuseum, setSuccessToAddMuseum] = useState(false);
  const [errorToAddMuseum, setErrorToAddMuseum] = useState(false);
  const dispatch = useDispatch();

  const AllMuseumsId = getAllMuseumsId(datasMuseums);

  const handleAddMuseumAndCloseSection = (e) => {
    if (!AllMuseumsId.includes(identifiant_museofile)) {
      dispatch(handleAddMuseum(data));
      dispatch(setIsAddSectionDisplayed(true));
      setSuccessToAddMuseum(true);
      setTimeout(() => {
        dispatch(setIsAddSectionDisplayed(false));
      }, 2000);
    } else {
      setErrorToAddMuseum(true);
      dispatch(setIsAddSectionDisplayed(true));
      setTimeout(() => {
        dispatch(setIsAddSectionDisplayed(false));
      }, 2000);
    }
  };

  return (
    <AddCardSectionStyled>
      <TiDeleteOutline
        className="close-section"
        onClick={() => dispatch(setIsAddSectionDisplayed(false))}
      />
      {!errorToAddMuseum ? (
        <InfosCard
          className="infos-card"
          image={data.url_image}
          name={nom_officiel_du_musee}
          city={commune}
        />
      ) : (
        <div className="error-message">
          <img src={imageStop} />
          Musée déjà éxistant
        </div>
      )}
      {!successToAddMuseum ? (
        <>
          <InputsContainer data={data} setData={setData} />
          <PrimaryButton
            className="add-button"
            label="Ajouter dans l'application"
            onClick={handleAddMuseumAndCloseSection}
          />
        </>
      ) : (
        <span className="success-message">Ajouté avec succés</span>
      )}
    </AddCardSectionStyled>
  );
}

const AddCardSectionStyled = styled.section`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 500px;
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
  .error-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: red;
    font-size: 20px;
    font-weight: bold;
    img {
      width: 50%;
      margin-bottom: 30px;
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
  .success-message {
    font-size: 18px;
    color: #008000e0;
    margin-top: 50px;
  }
`;
