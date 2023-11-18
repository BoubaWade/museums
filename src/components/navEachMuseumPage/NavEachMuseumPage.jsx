import React from "react";
import { GiElvenCastle } from "react-icons/gi";
import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavEachMuseumPage() {
  const datasMuseum = useSelector(
    (state) => state.museums.dataRecoveredAfterClickingOnACard
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/profile-home");
  };

  return (
    <NavEachMuseumPageStyled>
      <div className="logo-container">
        <GiElvenCastle className="icon-logo" />
        {/* <h1>Museums</h1> */}
        <h1>{datasMuseum?.nom_officiel_du_musee}</h1>
      </div>
      <PrimaryButton
        label="Retour "
        onClick={handleClick}
        className="preview-page"
      />
    </NavEachMuseumPageStyled>
  );
}

const NavEachMuseumPageStyled = styled.nav`
  background-color: #b3b3b32b;
  position: relative;
  width: 100vw;
  height: 70px;
  display: flex;
  /* align-items: center; */
  margin-bottom: 30px;
  .logo-container {
    /* width: 210px; */
    display: flex;
    justify-content: space-between;
    .icon-logo {
      font-size: 45px;
      color: #b659b6;
      margin-left: 50px;
    }
    h1 {
      font-family: "Berkshire Swash", cursive;
      color: #b659b6;
      display: flex;
      align-items: flex-end;
    }
  }
  .preview-page {
    position: absolute;
    bottom: 5px;
    right: 20px;
    font-size: 14px;
    padding: 5px 20px;
  }
`;
