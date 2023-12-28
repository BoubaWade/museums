import React from "react";
import { GiElvenCastle } from "react-icons/gi";
import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavEachMuseumPage() {
  const { museumRecovered } = useSelector((state) => state.museums);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/profile-home");
  };

  return (
    <NavEachMuseumPageStyled>
      <div className="logo-container">
        <GiElvenCastle className="icon-logo" />
        <h1>{museumRecovered?.nom}</h1>
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
  margin-bottom: 50px;
  .logo-container {
    display: flex;
    justify-content: space-between;
    .icon-logo {
      font-size: 35px;
      color: #b659b6;
      margin-top: 10px;
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
