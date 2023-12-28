import { CSSTransition, TransitionGroup } from "react-transition-group";
import { modalAdminAnimation, modalCalendarAnimation } from "../../../animations/animations";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { setIsBasketDisplayed } from "../../../features/profile/displaySettingsSlice";
import styled from "styled-components";
import bgImage from "../../../assets/images/bgProfilPrincipalContain.png";
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
  } = useSelector((state) => state.displaySettings);
  const dispatch = useDispatch();

  const width = {
    width: isBasketDisplayed ? "75%" : "100%",
    transition: "width 0.3s ease",
  };
  const arrow = isNavSwitchButtonActived
    ? "opener-arrow-hidden"
    : "arrow-open-basket";

  const openBasket = () => {
    dispatch(setIsBasketDisplayed(true));
  };
  return (
    <PrincipalContentStyled style={width}>
      <img src={bgImage} className="bg-image" />
      {isNavSwitchButtonActived && (
        <TransitionGroup className="transition-group">
          <CSSTransition appear classNames="modal-admin" timeout={500}>
            <ActiveAdminContainer />
          </CSSTransition>
        </TransitionGroup>
      )}
      {!isBasketDisplayed && (
        <BsFillArrowRightSquareFill className={arrow} onClick={openBasket} />
      )}
      {isMainSwitchButtonActived ? <SearchSection /> : <CardContainer />}

      {showModalCalendar && (
        <TransitionGroup className="transition-group">
          <CSSTransition appear classNames="modal-calendar" timeout={500}>
            <ModalCalendar />
          </CSSTransition>
        </TransitionGroup>
      )}
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
  ${modalCalendarAnimation}
  ${modalAdminAnimation}
`;
