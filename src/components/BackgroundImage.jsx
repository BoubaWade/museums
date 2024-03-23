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
    max-width: 1500px;
    max-height: 900px;
    width: 100vw;
    height: 100vh;
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    filter: brightness(30%);
    -webkit-filter: brightness(30%);
    -moz-filter: brightness(30%);
  }
  @media screen and (max-width: 768px) {
    img {
      object-fit: cover;
    }
  }
`;
