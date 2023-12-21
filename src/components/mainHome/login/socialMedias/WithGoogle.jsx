import UncontrolledInput from "../../../reusable-ui/UncontrolledInput";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../../../Firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../../features/sign/signSlice";

export default function WithGoogle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        dispatch(setCurrentUser(response.user.providerData[0]));
        navigate("/profile/profile-home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <WithGoogleStyled>
      <UncontrolledInput
        type="button"
        className="google"
        icon={<FcGoogle className="icon" />}
        value="Continue avec Google"
        onClick={handleSignInWithGoogle}
      />
      )
    </WithGoogleStyled>
  );
}
const WithGoogleStyled = styled.div`
  .google {
    width: 250px;
    height: 50px;
    font-size: 1rem;
    color: #ffff;
    border: none;
    text-align: right;
    cursor: pointer;
    background-color: #4285f4;
    padding-right: 35px;
  }
  .icon {
    position: absolute;
    top: 25px;
    left: 10px;
    color: #ffff;
    transform: translateY(-50%);
    font-size: 2rem;
  }
`;
