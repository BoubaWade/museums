import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import DatePicker from "react-date-picker";
import Calendar from "react-calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ListMuseumInfos from "../reusable-ui/ListMuseumInfos";
import { getFormatedDate } from "../../utils/utils";

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

  const [value, onChange] = useState(new Date());

  console.log(getFormatedDate(value));

  const handleClickLIkeButton = () => {
    if (!likeCount) {
      setLikeCount((prev) => prev + 1);
    } else setLikeCount((prev) => prev - 1);
  };

  const handleRedirectToWebSite = (url) => {
    // if (url.startsWith("http")) {
    return (window.location.href = url);
    // }
  };
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setUserLocation({ latitude, longitude });
  //       },
  //       (error) => {
  //         console.error("Erreur de géolocalisation : ", error);
  //       }
  //     );
  //   } else {
  //     console.log(
  //       "La géolocalisation n'est pas prise en charge par ce navigateur."
  //     );
  //   }
  // }, []);

  if (!datasMuseum) {
    navigate("/profile/profile-home");
    return;
  }

  return (
    <MainEachMuseumPageStyled>
      <div className="principal-content">
        <img src={datasMuseum.url_image} className="bg-image" />
        <div className="header">
          <div className="title-buttons">
            <h2>{datasMuseum.nom_officiel_du_musee.toUpperCase()}</h2>
            <div className="count-container">
              <span className="visits">{visitCount} Visite(s)</span>
              <span className="likes">
                {likeCount} J'aime(s){" "}
                {likeCount ? (
                  <AiOutlineDislike
                    onClick={handleClickLIkeButton}
                    className="icon-dislike"
                  />
                ) : (
                  <AiOutlineLike
                    onClick={handleClickLIkeButton}
                    className="icon-like"
                  />
                )}
              </span>
            </div>
            <PrimaryButton
              label="Accéder au site du musée"
              className="website-button"
              onClick={() => handleRedirectToWebSite(datasMuseum.url)}
            />
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
      <div className="calendar-container">
        <p>Réserver votre date de visite</p>
        <DatePicker
          onChange={onChange}
          value={value}
          className="calendar"
          calendarClassName="close-calendar"
          calendarIcon=""
        />
        <Calendar onChange={onChange} value={value} className="calendar" />
      </div>
    </MainEachMuseumPageStyled>
  );
}

const MainEachMuseumPageStyled = styled.main`
  width: 80%;
  display: grid;
  grid-template-columns: 750px 32%;
  grid-template-rows: 1.25fr 0.75fr;
  row-gap: 40px;
  column-gap: 3%;
  margin: 0 auto 30px;
  .principal-content {
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
        .count-container {
          margin-bottom: 10px;
          .likes,
          .visits {
            font-size: 16px;
            font-weight: bold;
            margin-right: 30px;
            cursor: pointer;
            .icon-like {
              color: green;
              font-size: 20px;
            }
            .icon-dislike {
              font-size: 20px;
              color: red;
            }
          }
        }
        .website-button {
          width: 200px;
          height: 45px;
          font-size: 15px;
          margin-bottom: 20px;
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
      padding: 10px;
    }
  }
  .maps-content {
    border-radius: 5px;
    overflow: hidden;
    .leaflet-container {
      width: 100%;
      height: 100%;
    }
  }
  .calendar-container {
    p {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .calendar {
      background-color: #f6e9f6;
      width: 100%;
      border-radius: 5px;
      border: 1.5px solid #b659b65f;
    }
    .close-calendar {
      display: none;
    }
  }
`;
