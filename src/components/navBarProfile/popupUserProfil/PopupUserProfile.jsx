import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase/firebase-config";
import { setCurrentUser } from "../../../features/sign/signSlice";
import PopupItem from "./PopupItem";
import {
  setIsPopUpDisplayed,
  setIsToggleCarrousel,
} from "../../../features/profile/displaySettingsSlice";

export default function PopupUserProfile() {
  const { isPopUpDisplayed } = useSelector((state) => state.displaySettings);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/profile/settings");
  };
  const logOut = async () => {
    signOut(auth).then(() => dispatch(setCurrentUser(null)));
    localStorage.removeItem("token");
    localStorage.removeItem("Basket");

    dispatch(setIsToggleCarrousel(false));
    dispatch(setIsPopUpDisplayed(false));
    navigate("/");
  };

  return (
    <PopupUserProfileStyled>
      {isPopUpDisplayed && (
        <ul className={isPopUpDisplayed ? "popup-items show" : "popup-items "}>
          <div className="triangle"></div>
          <PopupItem
            icon={<RiSendPlaneFill className="icon-item" />}
            label="Visite"
            onClick={() => {}}
          />
          <PopupItem
            icon={<FiSettings className="icon-item" />}
            label="Réglages"
            onClick={handleClick}
          />
          <PopupItem
            icon={<FaSignOutAlt className="icon-item " />}
            label="Déconnecter"
            onClick={logOut}
          />
        </ul>
      )}
    </PopupUserProfileStyled>
  );
}

const PopupUserProfileStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #757474;
  font-size: 16px;
  top: 60px;
  left: 67%;
  z-index: 3;
  .popup-items {
    position: relative;
    width: 145px;
    border-radius: 5px;
    z-index: 1;
    box-shadow: 0px 0px 4px 0px rgba(182, 89, 182, 0.75);
    .triangle {
      background-color: #f6e9f6;
      width: 19px;
      height: 19px;
      position: absolute;
      top: -11px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border-top: 1.5px solid #b659b6;
      border-left: 1.5px solid #b659b6;
      border-bottom: none;
    }
  }
  .show {
    background-color: #f6e9f6;
    animation: showPopUp 500ms ease;
  }
  @keyframes showPopUp {
    from {
      transform: translateY(-20%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
