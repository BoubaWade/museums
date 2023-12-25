import bgImage from "../../../assets/images/bgProfilPrincipalContain.png";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { setIsBasketDisplayed } from "../../../features/profile/displaySettingsSlice";
import CardContainer from "./cardContainer/CardContainer";
import SearchSection from "./SearchSection";
import ActiveAdminContainer from "./activeAdminSection/ActiveAdminContainer";
import ModalCalendar from "./ModalCalendar/ModalCalendar";

export default function PrincipalContent() {
  const {
    isBasketDisplayed,
    isNavSwitchButtonActived,
    isMainSwitchButtonActived,
    showModalCalendar,
    isMuseumsRended,
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
      {isNavSwitchButtonActived && <ActiveAdminContainer />}
      {!isBasketDisplayed && (
        <BsFillArrowRightSquareFill
          className={arrowClassName}
          onClick={() => dispatch(setIsBasketDisplayed(true))}
        />
      )}
      {isMainSwitchButtonActived ? <SearchSection /> : isMuseumsRended&&<CardContainer />}
      {showModalCalendar && <ModalCalendar />}
    </PrincipalContentStyled>
  );
}

const PrincipalContentStyled = styled.section`
  box-shadow: 0px 1px 6px 3px rgba(179, 179, 179, 0.75) inset;
  overflow-y: auto;
  .bg-image {
    position: absolute;
    width: 100vw;
    height: calc(100vh - 150px);
    object-fit: cover;
    z-index: -1;
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
