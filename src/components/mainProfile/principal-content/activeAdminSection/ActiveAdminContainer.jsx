import styled from "styled-components";
import SwitchButton from "../../../reusable-ui/SwitchButton";
import { setIsMainSwitchButtonActived } from "../../../../features/profile/displaySettingsSlice";
import { useSelector } from "react-redux";
import FormActiveAdmin from "./FormActiveAdmin";

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
        textInactive="Désactiver mode rech..."
      />
      {isFormAdminDisplayed && <FormActiveAdmin />}
    </ActiveAdminContainerStyled>
  );
}

const ActiveAdminContainerStyled = styled.div`
position:absolute;
z-index: 1;
  .switch-button {
    background-color: white;
    margin: 20px auto 0 20px;
  }
`;
