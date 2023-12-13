import styled from "styled-components";

export default function SettingButton({ show, label, onClick, icon }) {
  return (
    <SettingButtonStyled className={show ? "actived" : ""} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </SettingButtonStyled>
  );
}
const SettingButtonStyled = styled.button`
    background-color: #f6e9f6;
    width: 90px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 20px;
    border: 2px solid #b659b6;
    border-radius: 10px;
    cursor: pointer;
    .icon {
      font-size: 30px;
      color: #b659b6;
    }
    span {
      color: #b659b6;
    }
  }
  .actived {
    background-color: white;
`;
