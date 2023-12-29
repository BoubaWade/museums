import styled from "styled-components";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getMuseumsFiltered } from "../../../../utils/utils";

export default function CardContainer() {
  // const { isMuseumsRended } = useSelector((state) => state.displaySettings);
  const { museums, search } = useSelector((state) => state.museums);
  const museumsFiltered = getMuseumsFiltered(museums, search);

  if (museumsFiltered === undefined) return <div>Chargement...</div>;

  if (museumsFiltered.length === 0) {
    return (
      <CardContainerStyled>
        <p className="empty-card">Pas de musées trouvés</p>
      </CardContainerStyled>
    );
  }
  return (
    // isMuseumsRended && (
      <CardContainerStyled>
        {museumsFiltered.map((data) => (
          <Card key={data.id} data={data} className={"card"} />
        ))}
      </CardContainerStyled>
    // )
  );
}

const CardContainerStyled = styled.ul`
  background-color: white;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;
  row-gap: 50px;
  margin: 40px auto 80px;
  padding: 50px 20px;
  border-radius: 15px;
  box-shadow: 0px 1px 6px 3px rgba(179, 179, 179, 0.75);
  .empty-card {
    font-size: 18px;
    color: red;
  }
`;
