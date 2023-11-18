import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../features/sign/signSlice";

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <NavBarHomeStyled>
      <PrimaryButton
        label="S'inscrire"
        className="button-sign-up"
        onClick={() => dispatch(toggleModal())}
      />
    </NavBarHomeStyled>
  );
}
const NavBarHomeStyled = styled.nav`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  .button-sign-up {
    width: 100px;
    height: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
