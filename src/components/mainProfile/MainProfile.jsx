import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setIsPopUpDisplayed } from "../../features/profile/displaySettingsSlice";
import Basket from "./basket/Basket";
import PrincipalContent from "./principal-content/PrincipalContent";
import MuseumDetailsPanel from "./museumDetailsPanel/MuseumDetailsPanel";

export default function MainProfile() {
  const dispatch = useDispatch();

  return (
    <MainProfileStyled onClick={() => dispatch(setIsPopUpDisplayed(false))}>
      <Basket />
      <PrincipalContent />
      <MuseumDetailsPanel />
    </MainProfileStyled>
  );
}
const MainProfileStyled = styled.main`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 70px);
  top: 70px;
  display: flex;
  padding: 40px 0;
  overflow-x: hidden;
`;
