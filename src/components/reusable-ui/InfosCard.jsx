import styled from "styled-components";
import { GiElvenCastle } from "react-icons/gi";
import defaultImage from "../../assets/images/default-image-museum.jpeg";

export default function InfosCard({ className, image, name, city }) {
  return (
    <InfosCardStyled className={className}>
      <GiElvenCastle className="icon" />
      <img
        src={image ? image : defaultImage}
        className="picture"
        alt="image du musée"
      />
      <h2 className="name">{name?.toUpperCase()}</h2>
      <span className="city">{city}</span>
    </InfosCardStyled>
  );
}

const InfosCardStyled = styled.div`
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .icon {
    color: #b659b6;
    font-size: 30px;
  }
  .picture {
    width: 185px;
    height: 110px;
    border-radius: 5px;
  }
  .name {
    color: #000000b5;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }
  .city {
    display: flex;
    justify-content: space-between;
    color: #b659b6;
    font-weight: 500;
  }
`;
