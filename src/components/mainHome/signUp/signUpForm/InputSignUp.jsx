import styled from "styled-components";

export default function InputSignUp({ field }) {
  const { type, name, placeholder, value, onChange, error, autoFocus } = field;

  return (
    <InputSignUpStyled>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      />
      <span>{error}</span>
    </InputSignUpStyled>
  );
}

const InputSignUpStyled = styled.div`
  position: relative;
  margin: 0 auto 25px;
  input {
    width: 250px;
    height: 50px;
    font-size: 1rem;
    text-align: center;
    border-radius: 5px;
    outline: none;
    border: none;
    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      color: gray;
      text-align: center;
    }
    &:focus {
      box-shadow: 2px 2px 2px 2px #b659b6;
    }
  }
  span {
    display: block;
    color: red;
    font-size: 0.7rem;
    text-align: center;
    margin-top: 5px;
  }
`;
