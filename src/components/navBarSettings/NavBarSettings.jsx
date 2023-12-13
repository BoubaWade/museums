import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import Logo from "../reusable-ui/Logo";
import { useNavigate } from "react-router-dom";
import SettingsButtons from "./SettingsButtons";

export default function NavBarSettings() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/profile-home");
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
`;
