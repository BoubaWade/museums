import styled from "styled-components";
import { setIsBasketDisplayed } from "../../features/profile/displaySettingsSlice";
import { useDispatch } from "react-redux";

export default function SwitchButton({
  className,
  actived,
  setActived,
  textActive,
  textInactive,
}) {
  const dispatch = useDispatch();

  const handleClickOnSwitchButton = () => {
    dispatch(setActived());
    dispatch(setIsBasketDisplayed(false));
  };

  return (
    <SwitchButtonStyled
      className={className}
      onClick={() => handleClickOnSwitchButton()}
    >
      {!actived ? (
        <span className="text active">{textActive}</span>
      ) : (
        <span className="text inactive ">{textInactive}</span>
      )}
      <input
        type="checkbox"
        className="checkbox"
        checked={actived}
        onChange={() => {}}
      />
      <div className={actived ? "slide-button actived" : "slide-button"}></div>
    </SwitchButtonStyled>
  );
}
const SwitchButtonStyled = styled.div`
  position: relative;
  width: 215px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-right: 25px;
  border: 3px solid #b659b6;
  border-radius: 30px;
  cursor: pointer;
  .checkbox {
    display: none;
  }
  .slide-button {
    width: 32px;
    height: 32px;
    background-color: #b659b6;
    position: absolute;
    right: 1.5px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
  }
  .slide-button.actived {
    transform: translateX(-174px);
  }
  .text {
    font-size: 14px;
    font-weight: 500;
    transition: 0.3s ease-in-out;
  }
  .text.active {
    color: #b659b6;
    margin-left: 10px;
  }
  .text.inactive {
    color: #000000b1;
    margin-left: 50px;
  }
  @media screen and (max-width: 1024px) {
    width: 190px;
    .slide-button.actived {
      transform: translateX(-149px);
    }
  }
`;
