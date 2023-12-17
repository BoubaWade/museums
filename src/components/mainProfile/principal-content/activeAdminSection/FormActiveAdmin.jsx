import React, { useState } from "react";
import styled from "styled-components";
import { GiElvenCastle } from "react-icons/gi";
import { TiDelete } from "react-icons/ti";
import ControlledInput from "../../../reusable-ui/ControlledInput";
import { RiLockPasswordFill } from "react-icons/ri";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { setIsNavSwitchButtonActived } from "../../../../features/profile/displaySettingsSlice";

export default function FormActiveAdmin({ onSubmit }) {
  const currentUser = useSelector((state) => state.sign.currentUser);
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPasswordAdmin(e.target.value);
  };
  const handleClick = () => {
    dispatch(setIsNavSwitchButtonActived());
  };

  return (
    <FormActiveAdminStyled onSubmit={onSubmit}>
      <TiDelete className="close-modal" tabIndex={0} onClick={handleClick} />
      <GiElvenCastle className="icon-logo" />
      <ControlledInput
        type="password"
        className="input"
        placeholder="Mot de passe administrateur"
        icon={<RiLockPasswordFill className="icon" />}
        classNameContainer="input-container"
        value={passwordAdmin}
        onChange={handleChange}
      />
      <PrimaryButton label="Valider" className="submit-button" />
    </FormActiveAdminStyled>
  );
}

const FormActiveAdminStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: black;
  opacity: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  .close-modal {
    position: absolute;
    font-size: 55px;
    color: #b659b6;
    top: 10px;
    cursor: pointer;
    &:hover {
      color: #ff0000c5;
    }
    &:active {
      color: white;
    }
  }
  .icon-logo {
    font-size: 50px;
    color: #b659b6;
    margin-bottom: 50px;
  }
  .input-container {
    max-width: 440px;
    min-width: 290px;
    width: 30%;
    height: 50px;
    display: flex;
    justify-content: center;
    border: 2px solid #b659b6;
    border-radius: 7px;
    margin-bottom: 20px;
    .icon {
      position: absolute;
      color: #b659b6;
      font-size: 28px;
      margin: auto 0;
      left: 10px;
      top: 8px;
    }
    .input {
      width: 100%;
      height: 100%;
      font-size: 18px;
    }
  }
  .submit-button {
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
`;
