import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getEmailLocalStorage } from "../../../utils/user";
import { setSearch } from "../../../features/profile/museumsSlice";
import SearchForm from "../../reusable-ui/SearchForm";
import SwitchButton from "../../reusable-ui/SwitchButton";
import { setIsNavSwitchButtonActived } from "../../../features/profile/displaySettingsSlice";
import ImageOrUserIcon from "./ImageOrUserIcon";
import PopupUserProfile from "../popupUserProfil/PopupUserProfile";

export default function NavProfileRightSide() {
  const {
    isPopUpDisplayed,
    isNavSwitchButtonActived,
    isMainSwitchButtonActived,
  } = useSelector((state) => state.displaySettings);
  const email = getEmailLocalStorage();
  const dispatch = useDispatch();

  const handleSearchChange = (value) => {
    dispatch(setSearch(value));
  };

  return (
    <NavProfileRightSideStyled>
      <p className="pseudo">Bienvenue : {email?.split("@")[0]}</p>
      {!isMainSwitchButtonActived && (
        <SearchForm
          placeholder="Rechercher un musée"
          onSearch={handleSearchChange}
        />
      )}
      <div className="switch-and-user-icon">
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
    </NavProfileRightSideStyled>
  );
}

const NavProfileRightSideStyled = styled.div`
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
  .switch-and-user-icon {
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
`;
