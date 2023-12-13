import PrimaryButton from "../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import Counter from "./Counter";
import defaultImage from "../../../assets/images/default-image-museum.jpeg";

export default function PrincipalContent({ datasMuseumRecovered }) {
  const { url_image, nom_officiel_du_musee } = datasMuseumRecovered;
  
  const handleRedirectToWebSite = (url) => {
    // if (url.startsWith("http")) {
    return (window.location.href = url);
    // }
  };
  return (
    <PrincipalContentStyled>
      <img src={url_image ? url_image : defaultImage} className="bg-image" />
      <div className="header">
        <div className="title-buttons">
          <h2>{nom_officiel_du_musee.toUpperCase()}</h2>
          <Counter />
          <PrimaryButton
            label="Accéder au site du musée"
            className="website-button"
            onClick={() => handleRedirectToWebSite(datasMuseum.url)}
          />
        </div>
      </div>
    </PrincipalContentStyled>
  );
}

const PrincipalContentStyled = styled.div`
  background-color: #f6e9f6;
  border-radius: 5px;
  overflow: hidden;
  .bg-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  .header {
    display: flex;
    justify-content: space-around;
    .title-buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 18px;
        text-align: center;
        margin-bottom: 25px;
      }
      .website-button {
        width: 200px;
        height: 45px;
        font-size: 15px;
        margin-bottom: 20px;
      }
    }
  }
`;
