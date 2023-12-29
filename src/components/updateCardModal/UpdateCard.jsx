import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import FormUpdateCardContainer from "./FormUpdateCardContainer";
import useUpdateCard from "../../hooks/useUpdateCard";

export default function UpdateCard({ cardDatas, onDataChange }) {
  const { dataUpdated, setDataUpdated, isSubmitted, handleUpdate } =
    useUpdateCard(cardDatas, onDataChange);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleUpdate();
  };

  return (
    <UpdateCardStyled onSubmit={(e) => handleSubmit(e)}>
      {!isSubmitted ? (
        <FormUpdateCardContainer
          dataUpdated={dataUpdated}
          setDataUpdated={setDataUpdated}
        />
      ) : (
        <div className="submitted">
          <p className="submitted-message"> Modifications Validées</p>
          <BsCheckCircleFill className="submitted-icon" />
        </div>
      )}
    </UpdateCardStyled>
  );
}
const UpdateCardStyled = styled.form`
  width: 100%;
  cursor: pointer;
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
