import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MappingContent({ datasMuseumRecovered }) {
  const { nom_officiel_du_musee, latitude, longitude } = datasMuseumRecovered;
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
  box-shadow: 0 0 20px 2px rgba(179, 179, 179, 0.75);
  overflow: hidden;
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;
