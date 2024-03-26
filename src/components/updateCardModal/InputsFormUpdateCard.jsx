import styled from "styled-components";
import { inputFieldsUpdateCard } from "../../config/config";

export default function InputsFormUpdateCard({ dataUpdated, handleChange }) {
  return (
    <InputsFormUpdateCardStyled>
      {inputFieldsUpdateCard(dataUpdated, handleChange).map(
        ({ type, placeholder, name, value, onChange }, index) => (
          <input
            key={index}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
        )
      )}
    </InputsFormUpdateCardStyled>
  );
}

const InputsFormUpdateCardStyled = styled.div`
  input {
    width: 100%;
    height: 45px;
    font-size: 16px;
    color: #3a3939;
    margin-bottom: 20px;
    padding: 0 10px;
    border: none;
    border-radius: 3px;
    outline: none;
  }
  @media screen and (max-width: 768px) {
    input {
      height: 40px;
      font-size: 14px;
    }
  }
`;
