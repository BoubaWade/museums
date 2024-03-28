import { useSelector } from "react-redux";
import styled from "styled-components";
import PrincipalContent from "./principalContent/PrincipalContent";
import InformationsContent from "./InformationsContent";
import MappingContent from "./MappingContent";

export default function MainEachMuseumPage() {
  const { museumRecovered } = useSelector((state) => state.museums);

  if (!museumRecovered) return;

  return (
    <MainEachMuseumPageStyled>
      <PrincipalContent museumRecovered={museumRecovered} />
      <InformationsContent museumRecovered={museumRecovered} />
      <MappingContent museumRecovered={museumRecovered} />
    </MainEachMuseumPageStyled>
  );
}

const MainEachMuseumPageStyled = styled.main`
  width: 70%;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 1.25fr 0.75fr;
  row-gap: 40px;
  column-gap: 3%;
  margin: 0 auto 50px;
  @media screen and (max-width: 1200px) {
    width: 75%;
  }
  @media screen and (max-width: 1024px) {
    width: 85%;
  }
  @media screen and (max-width: 860px) {
    width: 95%;
    column-gap: 2px;
    row-gap: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 400px 0.75fr;
    row-gap: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;
