import React from "react";
import styled from "styled-components";
import ListMuseumInfos from "../reusable-ui/ListMuseumInfos";

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
      </div>
    </InformationsContentStyled>
  );
}

const InformationsContentStyled = styled.div`
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
`;
