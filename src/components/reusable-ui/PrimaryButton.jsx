import React from "react";
import styled from "styled-components";

export default function PrimaryButton({
  id,
  label,
  onClick,
  className,
  dataTestId,
}) {
  return (
    <PrimaryButtonStyled id={id} data-testid={dataTestId}>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.div`
  margin: 20px auto 0;
  button {
    background: linear-gradient(to right, pink, #b659b6);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: black;
    border: 2px solid #b659b6;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      transition: 0.1s ease-in;
      background: transparent;
      color: #b659b6;
      border: 2px solid #b659b6;
    }
    &:active {
      background: linear-gradient(to right, pink, #b659b6);
      color: white;
    }
  }
`;
