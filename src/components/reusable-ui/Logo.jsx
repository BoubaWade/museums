import styled from "styled-components";
import { GiElvenCastle } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/profile-home");
  };
  return (
    <LogoStyled onClick={handleClick}>
      <GiElvenCastle className="icon-logo" />
      <h1>Museums</h1>
    </LogoStyled>
  );
}
const LogoStyled = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .icon-logo {
    font-size: 30px;
    color: #b659b6;
    margin-left: 50px;
    margin-bottom: 15px;
  }
  h1 {
    font-size: 28px;
    font-family: "Berkshire Swash", cursive;
    color: #b659b6;
    display: flex;
    align-items: flex-end;
  }
  @media screen and (max-width: 1024px) {
    width: 160px;
    .icon-logo {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: baseline;

    .icon-logo {
      font-size: 38px;
      margin-bottom: 10px;
      margin-right: 10px;
    }
  }
`;
