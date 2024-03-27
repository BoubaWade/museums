import { FaUserCircle } from "react-icons/fa";
import { setIsPopUpDisplayed } from "../../../features/profile/displaySettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

export default function ImageOrUserIcon({ isPopUpDisplayed }) {
  const { currentUser } = useSelector((state) => state.sign);
  const dispatch = useDispatch();

  return (
    <ImageOrUserIconStyled data-testid="image-or-icon">
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
  @media screen and (max-width: 1024px) {
    .user-icon {
      font-size: 35px;
    }
    .user-picture {
      width: 35px;
      height: 35px;
    }
  }
  @media screen and (max-width: 650px) {
    .user-icon {
      margin-right: 30px;
    }
    .user-picture {
      margin-right: 30px;
    }
  }
`;
