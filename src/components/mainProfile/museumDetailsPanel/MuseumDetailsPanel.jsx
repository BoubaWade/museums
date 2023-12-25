import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import backgroundImage from "../../../assets/images/backgroundImage.gif";
import ListMuseumInfos from "../../reusable-ui/ListMuseumInfos";
import ImageAndTitle from "./ImageAndTitle";
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { setIsDetailsPanelDisplayed } from "../../../features/profile/displaySettingsSlice";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function MuseumDetailsPanel() {
  const museumRecovered = useSelector(
    (state) => state.museums.museumRecoveredAfterClickingOnACard
  );
  const isDetailsPanelDisplayed = useSelector(
    (state) => state.displaySettings.isDetailsPanelDisplayed
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const panelDisplayStyle = {
    transform: isDetailsPanelDisplayed ? "translateX(-100%)" : "",
  };

  const handleClick = () => {
    navigate("/profile/museum-details");
  };
  const handleClosePanel = () => {
    dispatch(setIsDetailsPanelDisplayed());
  };

  if (!museumRecovered) {
    return;
  }

  return (
    <MuseumDetailsPanelStyled style={panelDisplayStyle}>
      <img src={backgroundImage} className="bg-image" />
      <ImageAndTitle museumRecovered={museumRecovered} />
      <ListMuseumInfos museumRecovered={museumRecovered} />
      <PrimaryButton
        className="button-read-more"
        label="En savoir plus"
        onClick={handleClick}
      />
      <BsFillArrowRightSquareFill
        className="arrow-close-panel"
        onClick={handleClosePanel}
      />
    </MuseumDetailsPanelStyled>
  );
}

const MuseumDetailsPanelStyled = styled.div`
  background-color: rgb(255, 255, 255);
  width: 400px;
  height: calc(100vh - 150px);
  position: fixed;
  left: 100%;
  box-shadow: -6px 0px 6px -2px rgba(179, 179, 179, 0.75);
  transition: all 500ms ease-in-out;
  overflow-y: auto;
  .bg-image {
    display: block;
    width: 100%;
    height: 130px;
    margin: 0 auto;
    object-fit: cover;
  }
  .button-read-more {
    position: absolute;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 10px;
    right: 10px;
  }
  .arrow-close-panel {
    position: absolute;
    font-size: 40px;
    color: #b659b6;
    border-radius: 0 30px 30px 0;
    left: -4px;
    cursor: pointer;
  }
`;
