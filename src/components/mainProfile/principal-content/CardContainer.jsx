import styled from "styled-components";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getDatasMuseumsFiltered } from "../../../utils/utils";

export default function CardContainer() {
  const { datasMuseums, search } = useSelector((state) => state.museums);
  const datasMuseumsFiltered = getDatasMuseumsFiltered(datasMuseums, search);
  // const handleClick = (id) => {
  //   const cardToClicked = datasMuseumsFiltered.find(
  //     (data) => (data.identifiant_museofile = id)
  //   );
  //   console.log(cardToClicked);
  // };
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
        <Card
          key={data.identifiant_museofile}
          data={data}
          // handleClick={handleClick}
        />
      ))}
    </CardContainerStyled>
  );
}

const CardContainerStyled = styled.ul`
  background-color: white;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin: 40px auto 80px;
  padding: 50px 0;
  border-radius: 15px;
  .empty-card {
    font-size: 18px;
    color: red;
  }
`;
