import styled from "styled-components";
import Card from "./Card";
import { useSelector } from "react-redux";
import {
  getMuseumsFiltered,
  getMuseumsSortedByCity,
} from "../../../../utils/museums";
import Loader from "../../../reusable-ui/Loader";
import EmptyMuseums from "../../../reusable-ui/EmptyMuseums";
import SwitchButton from "../../../reusable-ui/SwitchButton";
import { setIsAscending } from "../../../../features/profile/museumsSlice";

export default function CardContainer() {
  // const { isMuseumsRended } = useSelector((state) => state.displaySettings);
  const { museums, search, isAscending } = useSelector(
    (state) => state.museums
  );
  const museumsFiltered = getMuseumsFiltered(museums, search);
  const museumsSorted = getMuseumsSortedByCity(museumsFiltered, isAscending);

  if (museumsSorted === undefined) return <Loader />;
  if (museumsSorted.length === 0) return <EmptyMuseums word="trouvés" />;

  return (
    // isMuseumsRended && (
    <CardContainerStyled>
      <SwitchButton
        className="sort-button"
        textActive="Trier par Ville"
        textInactive="Trier par Ville"
        actived={isAscending}
        setActived={setIsAscending}
      />
      {museumsSorted.map((data) => (
        <Card key={data.id} data={data} className={"card"} />
      ))}
    </CardContainerStyled>
    // )
  );
}

const CardContainerStyled = styled.ul`
  position: relative;
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
  .sort-button {
    background-color: white;
    position: fixed;
    top: 130px;
    right: -5px;
    z-index: 1;
    width: 160px;
    .slide-button.actived {
      transform: translateX(-119px);
    }
  }
`;
