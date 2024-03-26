import React from "react";
import styled from "styled-components";
import InputsFormUpdateCard from "./InputsFormUpdateCard";
import PrimaryButton from "../reusable-ui/PrimaryButton";

export default function FormUpdateCardContainer({
  dataUpdated,
  setDataUpdated,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUpdated({
      ...dataUpdated,
      [name]: value,
    });
  };
  return (
    <FormUpdateCardContainerStyled>
      <InputsFormUpdateCard
        dataUpdated={dataUpdated}
        handleChange={handleChange}
      />
      <PrimaryButton
        className="submit-button"
        label="Valider les modifications"
      />
    </FormUpdateCardContainerStyled>
  );
}
const FormUpdateCardContainerStyled = styled.div`
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
  @media screen and (max-width: 768px) {
    .submit-button {
      height: 40px;
      font-size: 13px;
      padding: 0 10px;
    }
  }
`;
