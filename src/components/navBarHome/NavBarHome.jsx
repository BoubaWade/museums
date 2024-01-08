import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { useDispatch } from "react-redux";
import { toggleSignUpForm } from "../../features/sign/signSlice";

export default function NavBarHome() {
  const dispatch = useDispatch();

  return (
    <NavBarHomeStyled>
      <PrimaryButton
        dataTestId="button-sign-up"
        label="S'inscrire"
        className="button-sign-up"
        onClick={() => dispatch(toggleSignUpForm())}
      />
    </NavBarHomeStyled>
  );
}
const NavBarHomeStyled = styled.nav`
  max-width: 1500px;
  width: 100vw;
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
