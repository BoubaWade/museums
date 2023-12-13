import React from "react";
import styled from "styled-components";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MappingContent({ datasMuseumRecovered }) {
  return (
    <MappingContentStyled>
      <MapContainer
        center={[datasMuseumRecovered.latitude, datasMuseumRecovered.longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            datasMuseumRecovered.latitude,
            datasMuseumRecovered.longitude,
          ]}
        >
          <Popup>
            {datasMuseumRecovered.nom_officiel_du_musee.toUpperCase()}.
          </Popup>
        </Marker>
      </MapContainer>
    </MappingContentStyled>
  );
}

const MappingContentStyled = styled.div`
  border-radius: 5px;
  overflow: hidden;
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;
