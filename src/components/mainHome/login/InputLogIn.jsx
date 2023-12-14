import React from "react";
import styled from "styled-components";

export default function InputLogIn({ field }) {
  const { type, defaultValue, placeholder, ref } = field;
  return (
    <InputLogInStyled>
      <input
        type={type}
        className="input"
        defaultValue={defaultValue}
        placeholder={placeholder}
        ref={ref}
      />
    </InputLogInStyled>
  );
}

const InputLogInStyled = styled.div`
  position: relative;
  margin: 0 auto 25px;
  .input {
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
`;
