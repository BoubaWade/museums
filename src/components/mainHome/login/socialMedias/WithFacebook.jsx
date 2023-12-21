import UncontrolledInput from "../../../reusable-ui/UncontrolledInput";
import { AiFillFacebook } from "react-icons/ai";
import styled from "styled-components";
import { auth, facebookProvider } from "../../../../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { setCurrentUser } from "../../../../features/sign/signSlice";

export default function WithFacebook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((response) => {
        dispatch(setCurrentUser(response.user.providerData[0]));
        console.log(response.user);
        navigate("/profile/profile-home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <WithFacebooktyled>
      <UncontrolledInput
        id="facebook"
        type="button"
        className="facebook"
        icon={<AiFillFacebook className="icon" />}
        value="Continue avec Facebook"
        onClick={handleSignInWithFacebook}
      />
    </WithFacebooktyled>
  );
}

const WithFacebooktyled = styled.div`
  .facebook {
    width: 250px;
    height: 50px;
    font-size: 1rem;
    color: #ffff;
    border: none;
    text-align: right;
    cursor: pointer;
    background-color: #3b5998;
    padding-right: 25px;
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
