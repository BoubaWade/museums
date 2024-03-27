import styled from "styled-components";
import defaultImage from "../../../assets/images/default-image-museum.jpeg";

export default function ImageAndTitle({ museumRecovered }) {
  const { url_image, nom } = museumRecovered;

  return (
    <ImageAndTitleStyled>
      <img
        src={url_image ? url_image : defaultImage}
        className="miniature-image"
      />
      <p className="title">{nom?.toUpperCase()}</p>
    </ImageAndTitleStyled>
  );
}

const ImageAndTitleStyled = styled.div`
  display: flex;
  align-items: center;
  .miniature-image {
    width: 150px;
    height: 120px;
    border-radius: 5px;
    border: 4px solid #f6e9f6;
    object-fit: cover;
    margin: -30px 0 10px 20px;
    box-shadow: 2px 2px 10px 2px rgba(179, 179, 179, 0.75);
  }
  .title {
    font-size: 12px;
    font-weight: 600;
    padding: 0 10px;
  }
  @media screen and (max-width: 500px) {
    .miniature-image {
      width: 140px;
      margin-left: 10px;
    }
    .title {
      font-size: 11px;
    }
  }
`;
