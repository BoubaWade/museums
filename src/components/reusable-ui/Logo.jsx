import React from "react";
import styled from "styled-components";
import { GiElvenCastle } from "react-icons/gi";

export default function Logo() {
  return (
    <LogoStyled>
      <GiElvenCastle className="icon-logo" />
      <h1>Museums</h1>
    </LogoStyled>
  );
}
const LogoStyled = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
  .icon-logo {
    font-size: 50px;
    color: #b659b6;
    margin-left: 50px;
    margin-bottom: 15px;
  }
  h1 {
    font-family: "Berkshire Swash", cursive;
    color: #b659b6;
    display: flex;
    align-items: flex-end;
  }
`;
