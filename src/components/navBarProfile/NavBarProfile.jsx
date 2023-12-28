import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SwitchButton from "../reusable-ui/SwitchButton";
import PopupUserProfile from "./popupUserProfil/PopupUserProfile";
import {
  setIsNavSwitchButtonActived,
  setShowModalCalendar,
} from "../../features/profile/displaySettingsSlice";
import { setSearch } from "../../features/profile/museumsSlice";
import SearchForm from "../reusable-ui/SearchForm";
import Logo from "../reusable-ui/Logo";
import ImageOrUserIcon from "./ImageOrUserIcon";
import { getEmailLocalStorage } from "../../utils/user";

export default function NavBarProfile() {
  const {
    isPopUpDisplayed,
    isNavSwitchButtonActived,
    isMainSwitchButtonActived,
  } = useSelector((state) => state.displaySettings);
  // const { dataSettings, selectedFile } = useSelector((state) => state.museums);
  const email = getEmailLocalStorage();

  const dispatch = useDispatch();

  const handleSearchChange = (value) => {
    dispatch(setSearch(value));
  };

  return (
    <NavBarProfileStyled onClick={() => dispatch(setShowModalCalendar(false))}>
      <Logo />
      <div className="nav-right-container">
        <p className="pseudo">Bienvenue : {email?.split("@")[0]}</p>
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
          <ImageOrUserIcon isPopUpDisplayed={isPopUpDisplayed} />
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
  .nav-right-container {
    width: 60%;
    display: flex;
    margin-right: 50px;
    .pseudo {
      position: absolute;
      color: #b659b6;
      font-size: 18px;
      top: 75px;
      right: 0;
      margin: auto 40px;
    }
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
    }
    .button-sign-out {
      width: 100px;
      height: 30px;
    }
  }
`;
