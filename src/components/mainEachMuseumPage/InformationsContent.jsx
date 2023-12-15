import React from "react";
import styled from "styled-components";
import ListMuseumInfos from "../reusable-ui/ListMuseumInfos";
import CalendarContent from "./CalendarContent";

export default function InformationsContent({ datasMuseumRecovered }) {
  return (
    <InformationsContentStyled>
      <h3>Informations</h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          autem officia consequuntur placeat quia optio facilis aliquam
          dignissimos tenetur, consectetur ipsam maxime rerum rem ipsa?
        </p>
        <ListMuseumInfos datas={datasMuseumRecovered} />
        <CalendarContent datasMuseumRecovered={datasMuseumRecovered} />
      </div>
    </InformationsContentStyled>
  );
}

const InformationsContentStyled = styled.div`
  width: 100%;
  height: 610px;
  box-shadow: 0 0 20px 2px rgba(179, 179, 179, 0.75);
  border-radius: 5px;
  h3 {
    background-color: #f6e9f6;
    padding: 10px;
  }
  p {
    padding: 10px;
  }
`;
