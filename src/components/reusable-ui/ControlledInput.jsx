import styled from "styled-components";

export default function ControlledInput({
  classNameContainer,
  type,
  placeholder,
  name,
  className,
  value,
  onChange,
  icon,
  error,
  classNameError,
  autoFocus
}) {
  return (
    <ControlledInputStyled className={classNameContainer}>
      {icon}
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      />
      <span className={classNameError}>{error}</span>
    </ControlledInputStyled>
  );
}

const ControlledInputStyled = styled.div`
  position: relative;
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
      box-shadow: 0px 0px 4px 0px rgba(182, 89, 182, 0.75);
    }
  }
  span {
    display: block;
    color: red;
    font-size: 0.8rem;
    text-align: center;
    margin-top: 5px;
  }
`;
