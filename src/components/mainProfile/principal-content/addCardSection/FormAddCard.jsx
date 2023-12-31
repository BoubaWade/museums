import styled from "styled-components";
import InputsContainer from "./InputsContainer";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import useAddMuseum from "../../../../hooks/useAddMuseum";

export default function FormAddCard({ dataRecovered, setDataRecovered }) {
  const { isAddMuseumSuccessfull, addOneToMuseums } =
    useAddMuseum(dataRecovered);

  const handleSubmit = async (e) => {
    e.preventDefault();
    addOneToMuseums();
  };

  return (
    <FormAddCardStyled>
      <InputsContainer data={dataRecovered} setData={setDataRecovered} />
      {isAddMuseumSuccessfull ? (
        <span className="success-message">Ajouté avec succés</span>
      ) : (
        <PrimaryButton
          className="add-button"
          label="Ajouter dans l'application"
          onClick={(e) => handleSubmit(e)}
        />
      )}
    </FormAddCardStyled>
  );
}

const FormAddCardStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .add-button {
    height: 40px;
    font-size: 14px;
    color: #000000b5;
    font-weight: 500;
    padding: 0 15px;
  }
  .success-message {
    font-size: 16px;
    color: #008000e0;
    margin-top: 20px;
  }
`;
