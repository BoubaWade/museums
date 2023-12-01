import { useSelector } from "react-redux";
import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ListMuseumInfos from "../reusable-ui/ListMuseumInfos";
import { calculateDistance } from "../../utils/utils";

export default function MainEachMuseumPage() {
  const datasMuseum = useSelector(
    (state) => state.museums.dataRecoveredAfterClickingOnACard
  );
  const [likeCount, setLikeCount] = useState(0);
  const [visitCount, setVisitCount] = useState(1300);
  const navigate = useNavigate();
  // if (datasMuseum) {
  //   localStorage.setItem("DATAS", datasMuseum);
  // }
  const [userLocation, setUserLocation] = useState(null);

  const handleShowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Erreur de géolocalisation : ", error);
        }
      );
    } else {
      console.log(
        "La géolocalisation n'est pas prise en charge par ce navigateur."
      );
    }
  };

  const handleClickLIkeButton = () => {
    if (!likeCount) {
      setLikeCount((prev) => prev + 1);
    } else setLikeCount((prev) => prev - 1);
  };

  const handleRedirectToWebSite = (url) => {
    // if (url.startsWith("http")) {
    return (window.location.href = url); // Rediriger vers une URL externe
    // }
  };
  // useEffect(() => {
  // if (!datasMuseum) {
  // navigate("/profile/profile-home");
  // return;
  // }
  // }, [datasMuseum]);

  if (!datasMuseum) {
    navigate("/profile/profile-home");
    return;
  }
  const distanceBetweenUserAndMUseum = calculateDistance(
    datasMuseum.latitude,
    datasMuseum.longitude,
    userLocation?.latitude,
    userLocation?.longitude
  );
  console.log(distanceBetweenUserAndMUseum);

  return (
    <MainEachMuseumPageStyled>
      <div className="principal-content">
        <img src={datasMuseum.url_image} className="bg-image" />
        <div className="header">
          {/* <img src={datasMuseum?.url_image} className="mini-image" /> */}
          <div className="title-buttons">
            <h2>{datasMuseum.nom_officiel_du_musee.toUpperCase()}</h2>
            <div className="count-container">
              <strong>
                <span>{visitCount}</span> Visite(s)
              </strong>
              <strong>
                <span>{likeCount}</span> J'aime(s)
              </strong>
            </div>
            <div className="buttons">
              <PrimaryButton
                label="Accéder au site du musée"
                className="website-button"
                onClick={() => handleRedirectToWebSite(datasMuseum.url)}
              />
              <PrimaryButton
                label={likeCount ? "Je n'aime pas" : "J'aime"}
                className="like-button"
                onClick={handleClickLIkeButton}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="article-content">
        <h3>Informations</h3>
        <div>
          <div>
            <img src="" />
            <h4></h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            autem officia consequuntur placeat quia optio facilis aliquam
            dignissimos tenetur, consectetur ipsam maxime rerum rem ipsa?
          </p>
          <ListMuseumInfos datas={datasMuseum} />
        </div>
      </div>
      <div className="maps-content">
        <MapContainer
          center={[datasMuseum.latitude, datasMuseum.longitude]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[datasMuseum.latitude, datasMuseum.longitude]}>
            <Popup>{datasMuseum.nom_officiel_du_musee.toUpperCase()}.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div>
        {/* <h3>
          Latitude : {userLocation?.latitude} <br/>
          Longitude : {userLocation?.longitude}
        </h3> */}
        <div>
          {/* <h3>Coordonnées de géolocalisation de l'utilisateur :</h3> */}
          {userLocation ? (
            <div>

              <p>Vous êtes à {distanceBetweenUserAndMUseum} km du musée</p>
              {/* <p>Latitude : {userLocation.latitude}</p>
              <p>Longitude : {userLocation.longitude}</p> */}
            </div>
          ) : (
            <p>Chargement de la géolocalisation...</p>
          )}
        </div>
        <button onClick={handleShowLocation}>
          Distance entre ma position et le musée
        </button>
      </div>
      <div className="aside-content">
        <h3>Détails</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus
          atque, totam fugit similique veritatis obcaecati! Optio praesentium
          ratione inventore reprehenderit nihil maxime aperiam voluptates id
          necessitatibus voluptatem, officia recusandae a, non sint enim autem
          et, quam quis distinctio amet accusantium nobis excepturi explicabo.
          Tempora quaerat nemo, quod animi molestiae pariatur aliquid quo sequi
          aut fugit facilis eos dignissimos quam reprehenderit distinctio, eaque
          fugiat laborum sunt repellendus aperiam libero quidem?
        </p>
      </div>
    </MainEachMuseumPageStyled>
  );
}

const MainEachMuseumPageStyled = styled.main`
  width: 80%;
  display: grid;
  /* grid-template-columns: 65% 32%; */
  grid-template-columns: 750px 32%;
  grid-template-rows: 1.25fr 0.75fr;
  row-gap: 40px;
  column-gap: 3%;
  margin: 0 auto 30px;
  .principal-content {
    /* border: 1px solid #b659b6; */
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
      /* align-items: center; */
      /* .mini-image {
        width: 180px;
        height: 220px;
        margin-top: -70px;
      
        border-radius:10px;
        border: 6px solid #eec5ee;
    
        object-fit: cover;
      } */
      .title-buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        h2 {
          /* color: #b659b6; */
          font-size: 18px;
          text-align: center;
          margin-bottom: 10px;
        }
        .count-container {
          /* display: flex; */

          strong {
            font-size: 13px;
            margin-right: 30px;
          }
        }
        .buttons {
          display: flex;
          /* justify-content:space-between; */
          width: 100%;
          margin-bottom: 10px;

          .website-button,
          .like-button {
            /* display: block; */
            width: 200px;
            height: 45px;
            font-size: 15px;
            margin-right: 10px;
          }
          .like-button {
            background: white;
          }
          .website-button {
            background: black;
            color: #f0f0f0;
            border-color: black;
          }
        }
      }
    }
  }
  .article-content {
    border: 1px solid #f6e9f6;
    border-radius: 5px;
    h3 {
      background-color: #f6e9f6;
      padding: 10px;
    }
    overflow: wrap;
    p {
      /* font-size: 16px; */
      padding: 10px;
    }
  }
  .aside-content {
    border-radius: 5px;
    border: 1px solid #f6e9f6;

    h3 {
      background-color: #f6e9f6;
      padding: 10px;
    }
    p {
      padding: 10px 20px;
    }
  }
  .maps-content {
    /* background-color: pink; */
    border-radius: 5px;
    overflow: hidden;
    .leaflet-container {
      width: 100%;
      height: 100%;
    }
  }
`;
