import { FaUserCircle } from "react-icons/fa";
import { setIsPopUpDisplayed } from "../../features/profile/displaySettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

export default function ImageOrUserIcon({ isPopUpDisplayed }) {
  const { currentUser } = useSelector((state) => state.sign);
  const dispatch = useDispatch();

  return (
    <ImageOrUserIconStyled>
      {!currentUser?.photoURL ? (
        <FaUserCircle
          className="user-icon"
          onClick={() => dispatch(setIsPopUpDisplayed(!isPopUpDisplayed))}
        />
      ) : (
        <img
          src={currentUser?.photoURL}
          className="user-picture"
          onClick={() => dispatch(setIsPopUpDisplayed(!isPopUpDisplayed))}
        />
      )}
    </ImageOrUserIconStyled>
  );
}
const ImageOrUserIconStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user-icon {
    font-size: 40px;
    color: #b659b6;
    cursor: pointer;
  }
  .user-picture {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
