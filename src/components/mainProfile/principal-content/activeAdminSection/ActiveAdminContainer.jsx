import styled from "styled-components";
import SwitchButton from "../../../reusable-ui/SwitchButton";
import {
  setIsFormAdminDisplayed,
  setIsMainSwitchButtonActived,
} from "../../../../features/profile/displaySettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import FormActiveAdmin from "./FormActiveAdmin";

export default function ActiveAdminContainer() {
  const { isFormAdminDisplayed, isMainSwitchButtonActived } = useSelector(
    (state) => state.displaySettings
  );
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setIsFormAdminDisplayed(false));
  };

  return (
    <ActiveAdminContainerStyled>
      <SwitchButton
        className="switch-button"
        actived={isMainSwitchButtonActived}
        setActived={setIsMainSwitchButtonActived}
        textActive="Activer mode recherche"
        textInactive="Désactiver mode rech..."
      />
      {isFormAdminDisplayed && (
        <FormActiveAdmin
          isFormAdminDisplayed={isFormAdminDisplayed}
          onSubmit={handleSubmit}
        />
      )}
    </ActiveAdminContainerStyled>
  );
}

const ActiveAdminContainerStyled = styled.div`
  .switch-button {
    background-color: white;
    margin: 20px auto 0;
  }
`;
