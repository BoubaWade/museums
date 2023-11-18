import styled from "styled-components";
import backgroundImage from "../assets/images/backgroundHomeImage.jpeg";

export default function BackgroundImage() {
  return (
    <BackgroundImageStyled>
      <img src={backgroundImage} alt="image de fond" />
    </BackgroundImageStyled>
  );
}

const BackgroundImageStyled = styled.div`
  img {
    width: 100vw;
    height: 100vh;
    filter: brightness(30%);
    -webkit-filter: brightness(30%);
    -moz-filter: brightness(30%);
  }
`;
