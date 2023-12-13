import React from "react";
import styled from "styled-components";

export default function PopupItem({ icon, label, onClick }) {
  return (
    <PopupItemStyled onClick={onClick}>
      <span className="icon-item">{icon}</span>
      <span className="item">{label}</span>
    </PopupItemStyled>
  );
}

const PopupItemStyled = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding-left: 15px;
  border-bottom: 1.5px solid #b3b3b369;
  &:hover {
    color: #b659b6;
  }
  .icon-item {
    font-size: 20px;
    color: #b659b6;
    margin-right: 5px;
  }
  .item {
    cursor: pointer;
  }
`;
