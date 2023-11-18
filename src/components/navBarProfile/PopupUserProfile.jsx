import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { setCurrentUser } from "../../features/sign/signSlice";

export default function PopupUserProfile() {
  const { isPopUpDisplayed } = useSelector((state) => state.displaySettings);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    signOut(auth).then(() => {
      dispatch(setCurrentUser(null));
      navigate("/");
    });
  };

  return (
    <PopupUserProfileStyled>
      {isPopUpDisplayed && (
        <ul className={isPopUpDisplayed ? "popup-items show" : "popup-items "}>
          <li className="triangle"></li>
          <li>
            <RiSendPlaneFill className="icon-item" />
            <span className="item">Visite</span>
          </li>
          <li>
            <BiSolidUserCircle className="icon-item" />
            <span className="item">Profile</span>
          </li>
          <li>
            <FiSettings className="icon-item" />
            <span className="item">Réglages</span>
          </li>
          <li className="logout">
            <FaSignOutAlt className="icon-item " />
            <span className="item" onClick={() => logOut()}>
              Déconnecter
            </span>
          </li>
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
  left: 64%;
  .popup-items {
    position: relative;
    width: 145px;
    border-radius: 5px;
    z-index: 1;
    box-shadow: 0px 0px 4px 0px rgba(182, 89, 182, 0.75);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(182, 89, 182, 0.75);
    -moz-box-shadow: 0px 0px 4px 0px rgba(182, 89, 182, 0.75);
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
    li {
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
        margin-right: 8px;
      }
      .item {
        cursor: pointer;
      }
    }
    .logout {
      border: none;
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
