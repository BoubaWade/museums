import React from "react";
import styled from "styled-components";
import { CiSettings } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import {
  setShowEditProfile,
  setShowSettingsProfile,
} from "../../features/profile/displaySettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import SettingButton from "./SettingButton";

export default function SettingsButtons() {
  const { showEditProfile, showSettingsProfile } = useSelector(
    (state) => state.displaySettings
  );
  const dispatch = useDispatch();
  const handleShowEditProfile = () => {
    dispatch(setShowEditProfile(true));
    dispatch(setShowSettingsProfile(false));
  };
  const handleShowSettingsProfile = () => {
    dispatch(setShowEditProfile(false));
    dispatch(setShowSettingsProfile(true));
  };
  return (
    <SettingsButtonsStyled>
      <SettingButton
        show={showEditProfile}
        label="Modifier"
        icon={<FaUserEdit className="icon" />}
        onClick={handleShowEditProfile}
      />
      <SettingButton
        show={showSettingsProfile}
        label="Réglages"
        icon={<CiSettings className="icon" />}
        onClick={handleShowSettingsProfile}
      />
    </SettingsButtonsStyled>
  );
}
const SettingsButtonsStyled = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
