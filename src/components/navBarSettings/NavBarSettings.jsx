import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import Logo from "../reusable-ui/Logo";
import { useNavigate } from "react-router-dom";
import SettingsButtons from "./SettingsButtons";
import { useDispatch, useSelector } from "react-redux";
import { setIsFormAdminDisplayed } from "../../features/profile/displaySettingsSlice";

export default function NavBarSettings() {
  const { isNavSwitchButtonActived } = useSelector(
    (state) => state.displaySettings
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/profile/profile-home");
    if (isNavSwitchButtonActived) {
      dispatch(setIsFormAdminDisplayed(true));
    }
  };

  return (
    <NavBarSettingsStyled>
      <Logo />
      <SettingsButtons />
      <PrimaryButton
        label="Retour"
        className="return-button"
        onClick={handleClick}
      />
    </NavBarSettingsStyled>
  );
}

const NavBarSettingsStyled = styled.div`
  background-color: #b3b3b32b;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  .return-button {
    width: 90px;
    height: 35px;
    margin-right: 10px;
    border-radius: 5px;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    height: 250px;
  }
`;
