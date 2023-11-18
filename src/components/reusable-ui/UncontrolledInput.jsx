import styled from "styled-components";

export default function UncontrolledInput({
  id,
  type,
  placeholder,
  className,
  icon,
  value,
  error,
  onClick,
}) {
  return (
    <UncontrolledInputStyled>
      {icon}
      <input
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
      />
      <span>{error}</span>
    </UncontrolledInputStyled>
  );
}

const UncontrolledInputStyled = styled.div`
  position: relative;
  margin: 0 auto 25px;
  input {
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
