import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MappingContent({ museumRecovered }) {
  const { nom_officiel_du_musee, latitude, longitude } = museumRecovered;
  return (
    <MappingContentStyled>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{nom_officiel_du_musee.toUpperCase()}.</Popup>
        </Marker>
      </MapContainer>
    </MappingContentStyled>
  );
}

const MappingContentStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1.5px solid #b659b65f;
  overflow: hidden;
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;
