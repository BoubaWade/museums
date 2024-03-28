import styled from "styled-components";
import SwitchButton from "../../../reusable-ui/SwitchButton";
import FormActiveAdmin from "./FormActiveAdmin";
import { setIsMainSwitchButtonActived } from "../../../../features/profile/displaySettingsSlice";
import { useSelector } from "react-redux";

export default function ActiveAdminContainer() {
  const { isFormAdminDisplayed, isMainSwitchButtonActived } = useSelector(
    (state) => state.displaySettings
  );

  return (
    <ActiveAdminContainerStyled>
      <SwitchButton
        className="switch-button"
        actived={isMainSwitchButtonActived}
        setActived={setIsMainSwitchButtonActived}
        textActive="Activer mode recherche"
        textInactive="Désactiver rech..."
      />
      {isFormAdminDisplayed && <FormActiveAdmin />}
    </ActiveAdminContainerStyled>
  );
}

const ActiveAdminContainerStyled = styled.div`
  position: absolute;
  z-index: 2;
  .switch-button {
    background-color: white;
    margin: 20px auto 0 20px;
  }
`;
