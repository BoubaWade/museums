import styled from "styled-components";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getDatasMuseumsFiltered } from "../../../utils/utils";

export default function CardContainer() {
  const { datasMuseums, search } = useSelector((state) => state.museums);
  const datasMuseumsFiltered = getDatasMuseumsFiltered(datasMuseums, search);

  if (!datasMuseumsFiltered || datasMuseumsFiltered.length === 0) {
    return (
      <CardContainerStyled>
        <p className="empty-card">Pas de musées trouvés</p>
      </CardContainerStyled>
    );
  }

  return (
    <CardContainerStyled>
      {datasMuseumsFiltered.map((data) => (
        <Card key={data.identifiant_museofile} data={data} />
      ))}
    </CardContainerStyled>
  );
}

const CardContainerStyled = styled.ul`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin: 40px auto 80px;
  .empty-card {
    font-size: 18px;
    color: red;
  }
`;
