import styled from "styled-components";
import InputsContainer from "./InputsContainer";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import useMuseums from "../../../../hooks/useMuseums";
const success = { fontSize: "16px", color: "#008000e0", marginTop: "90px" };

export default function FormAddCard({ dataRecovered, setDataRecovered }) {
  const { isAddMuseumSuccessfull, addOneToMuseums } = useMuseums();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addOneToMuseums(dataRecovered);
  };

  if (isAddMuseumSuccessfull)
    return <span style={success}>Ajouté avec succés</span>;

  return (
    <FormAddCardStyled>
      <InputsContainer data={dataRecovered} setData={setDataRecovered} />
      {!isAddMuseumSuccessfull && (
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
`;
