import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import backgroundImage from "../../../assets/images/backgroundImage.gif";
// import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import ListMuseumInfos from "./ListMuseumInfos";
import ImageAndTitle from "./ImageAndTitle";
import { useNavigate } from "react-router-dom";
// import PrimaryButton from "../../reusable-ui/PrimaryButton";
// import backgroundImage from "../../../../assets/images/backgroundImage.gif";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { setIsDetailsPanelDisplayed } from "../../../features/profile/displaySettingsSlice";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function MuseumDetailsPanel() {
  const dataRecovered = useSelector(
    (state) => state.museums.dataRecoveredAfterClickingOnACard
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

  if (!dataRecovered) {
    return;
  }

  return (
    <MuseumDetailsPanelStyled style={panelDisplayStyle}>
      <img src={backgroundImage} className="bg-image" />
      <ImageAndTitle dataRecovered={dataRecovered} />
      <ListMuseumInfos dataRecovered={dataRecovered} />
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
  /* display: none; */
  /* max-width: 400px; */
  background-color: white;
  /* width: 25%; */
  width: 400px;
  height: calc(100vh - 150px);
  position: absolute;
  left: 100%;
  /* right: 0; */
  box-shadow: -6px 0px 6px -2px rgba(179, 179, 179, 0.75);
  overflow-y: auto;
  transition: all 500ms ease-in-out;
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
    bottom: 10px;
    cursor: pointer;
  }
`;
