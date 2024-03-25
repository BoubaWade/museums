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
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1.5px solid #b3b3b369;
  &:hover {
    color: #b659b6;
  }
  .icon-item {
    font-size: 20px;
    color: #b659b6;
    margin: 0 5px;
  }
  .item {
    margin: 0;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50px;
    font-size: 13px;
    .icon-item {
      display: none;
    }
  }
`;
