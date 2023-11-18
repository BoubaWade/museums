import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import { setIsDisplayUpdateCardModal } from "../../features/profile/displaySettingsSlice";
import { handleUpdateAMuseum } from "../../features/profile/museumsSlice";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { inputFieldsUpdateCard } from "../../config/config";

export default function FormUpdateCard({ cardDatas, onDataChange }) {
  const [dataUpdated, setDataUpdated] = useState(cardDatas);
  const datasMuseums = useSelector((state) => state.museums.datasMuseums);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUpdated({
      ...dataUpdated,
      [name]: value,
    });
  };

  useEffect(() => {
    onDataChange(dataUpdated);
  }, [dataUpdated]);

  const datasMuseumsListUpdated = datasMuseums.map((data) => {
    if (data.identifiant_museofile === dataUpdated.identifiant_museofile) {
      return {
        ...data,
        url_image: dataUpdated.url_image,
        nom_officiel_du_musee: dataUpdated.nom_officiel_du_musee,
        commune: dataUpdated.commune,
      };
    } else {
      return data;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleUpdateAMuseum(datasMuseumsListUpdated));
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      dispatch(setIsDisplayUpdateCardModal(false));
    }, 1000);
  };

  return (
    <FormUpdateCardStyled onSubmit={(e) => handleSubmit(e)}>
      {!isSubmitted ? (
        <div className="form-container">
          {inputFieldsUpdateCard(dataUpdated, handleChange).map(
            (field, index) => (
              <input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            )
          )}
          <PrimaryButton
            className="submit-button"
            label="Valider les modifications"
          />
        </div>
      ) : (
        <div className="submitted">
          <p className="submitted-message"> Modifications Validées</p>
          <BsCheckCircleFill className="submitted-icon" />
        </div>
      )}
    </FormUpdateCardStyled>
  );
}
const FormUpdateCardStyled = styled.form`
  width: 100%;
  cursor: pointer;
  .form-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 17px;
    margin: 0 auto;
    input {
      width: 100%;
      height: 45px;
      font-size: 16px;
      color: #3a3939;
      padding: 0 10px;
      border: none;
      border-radius: 3px;
      outline: none;
    }
    .submit-button {
      width: 100%;
      height: 45px;
      font-size: 14px;
      padding: 0 15px;
    }
  }
  .submitted {
    display: flex;
    flex-direction: column;
    align-items: center;
    .submitted-message {
      color: white;
      font-size: 24px;
      margin-bottom: 10px;
    }
    .submitted-icon {
      color: green;
      font-size: 25px;
    }
  }
`;
