import bgImage from "../../../assets/images/bgProfilPrincipalContain.png";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import {
  setIsBasketDisplayed,
  setIsMainSwitchButtonActived,
} from "../../../features/profile/displaySettingsSlice";
import CardContainer from "./cardContainer/CardContainer";
import SwitchButton from "../../reusable-ui/SwitchButton";
import SearchSection from "./SearchSection";

export default function PrincipalContent() {
  const {
    isBasketDisplayed,
    isNavSwitchButtonActived,
    isMainSwitchButtonActived,
  } = useSelector((state) => state.displaySettings);

  const dispatch = useDispatch();
  const width = {
    width: isBasketDisplayed ? "75%" : "100%",
    transition: "width 0.3s ease",
  };
  const arrowClassName = isNavSwitchButtonActived
    ? "opener-arrow-hidden"
    : "arrow-open-basket";

  return (
    <PrincipalContentStyled style={width}>
      <img src={bgImage} className="bg-image" />
      {isNavSwitchButtonActived && (
        <SwitchButton
          className="switch-button"
          actived={isMainSwitchButtonActived}
          setActived={setIsMainSwitchButtonActived}
          textActive="Activer mode recherche"
          textInactive="Désactiver mode rech..."
        />
      )}
      {!isBasketDisplayed && (
        <BsFillArrowRightSquareFill
          className={arrowClassName}
          onClick={() => dispatch(setIsBasketDisplayed(true))}
        />
      )}
      {isMainSwitchButtonActived ? <SearchSection /> : <CardContainer />}
    </PrincipalContentStyled>
  );
}

const PrincipalContentStyled = styled.section`
  overflow-y: auto;
  box-shadow: 0px 1px 6px 3px rgba(179, 179, 179, 0.75) inset;
  .bg-image {
    position: absolute;
    width: 100vw;
    height: calc(100vh - 150px);
    object-fit: cover;
    z-index: -1;
  }
  .switch-button {
    background-color: white;
    margin: 20px auto 0;
  }
  .input-search {
    width: 100%;
  }
  .arrow-open-basket {
    position: absolute;
    font-size: 40px;
    color: #b659b6;
    border-radius: 0 30px 30px 0;
    left: -5px;
    cursor: pointer;
  }
  .opener-arrow-hidden {
    display: none;
  }
`;
