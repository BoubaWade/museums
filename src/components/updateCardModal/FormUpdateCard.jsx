import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BsCheckCircleFill } from "react-icons/bs";
import { setIsDisplayUpdateCardModal } from "../../features/profile/displaySettingsSlice";
import {
  handleUpdateAMuseum,
  setDatasMuseums,
} from "../../features/profile/museumsSlice";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import InputsFormUpdateCard from "./InputsFormUpdateCard";
import { getDatasMuseumsInFirestore } from "../../Firebase/firebaseUtilities";

export default function FormUpdateCard({ cardDatas, onDataChange }) {
  const [dataUpdated, setDataUpdated] = useState(cardDatas);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(handleUpdateAMuseum(dataUpdated));
    const museumsList = await getDatasMuseumsInFirestore();
    dispatch(setDatasMuseums(museumsList));

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
          <InputsFormUpdateCard
            dataUpdated={dataUpdated}
            handleChange={handleChange}
          />
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
    margin: 0 auto;
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
