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
  width: 85%;
  display: grid;
  grid-template-columns: 750px 32%;
  grid-template-rows: 1.25fr 0.75fr;
  row-gap: 40px;
  column-gap: 3%;
  margin: 0 auto 50px;
`;
