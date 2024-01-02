import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setShowModalCalendar } from "../../features/profile/displaySettingsSlice";
import Logo from "../reusable-ui/Logo";
import NavProfileRightSide from "./navRightSide/NavProfileRightSide";

export default function NavBarProfile() {
  const dispatch = useDispatch();

  return (
    <NavBarProfileStyled onClick={() => dispatch(setShowModalCalendar(false))}>
      <Logo />
      <NavProfileRightSide />
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
`;
