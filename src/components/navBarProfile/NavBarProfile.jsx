import styled from "styled-components";
import { GiElvenCastle } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SwitchButton from "../reusable-ui/SwitchButton";
import PopupUserProfile from "./PopupUserProfile";
import {
  setIsNavSwitchButtonActived,
  setIsPopUpDisplayed,
} from "../../features/profile/displaySettingsSlice";
import { setSearch } from "../../features/profile/museumsSlice";
import SearchForm from "../reusable-ui/SearchForm";

export default function NavBar() {
  const {
    isPopUpDisplayed,
    isNavSwitchButtonActived,
    isMainSwitchButtonActived,
  } = useSelector((state) => state.displaySettings);
  const dispatch = useDispatch();

  const handleSearchChange = (value) => {
    dispatch(setSearch(value));
  };

  return (
    <NavBarProfileStyled>
      <div className="logo-container">
        <GiElvenCastle className="icon-logo" />
        <h1>Museums</h1>
      </div>
      <div className="nav-right-container">
        {!isMainSwitchButtonActived && (
          <SearchForm
            placeholder="Rechercher un musée"
            onSearch={handleSearchChange}
          />
        )}
        <div className="switch-and-user-buttons">
          <SwitchButton
            className={isMainSwitchButtonActived ? "inaccessible" : ""}
            actived={isNavSwitchButtonActived}
            setActived={setIsNavSwitchButtonActived}
            textActive="Activer mode ADMIN"
            textInactive="Désactiver mode ADMIN"
          />
          <FaUserCircle
            className="icon-user"
            onClick={() => dispatch(setIsPopUpDisplayed(!isPopUpDisplayed))}
          />
          <PopupUserProfile />
        </div>
      </div>
    </NavBarProfileStyled>
  );
}
const NavBarProfileStyled = styled.nav`
  background-color: #b3b3b32b;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  .logo-container {
    width: 210px;
    display: flex;
    justify-content: space-between;
    .icon-logo {
      font-size: 50px;
      color: #b659b6;
      margin-left: 50px;
      margin-bottom:15px;
    }
    h1 {
      font-family: "Berkshire Swash", cursive;
      color: #b659b6;
      display: flex;
      align-items: flex-end;
    }
  }
  .nav-right-container {
    display: flex;
    margin-right: 50px;
    .switch-and-user-buttons {
      position: relative;
      width: 330px;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style-type: none;
      font-size: 30px;
      .inaccessible {
        pointer-events: none;
        background-color: #ccc;
        border-color: #ccc;
        opacity: 0.4;
      }
      .icon-user {
        font-size: 40px;
        color: #b659b6;
        cursor: pointer;
      }
    }
    .button-sign-out {
      width: 100px;
      height: 30px;
    }
  }
`;
