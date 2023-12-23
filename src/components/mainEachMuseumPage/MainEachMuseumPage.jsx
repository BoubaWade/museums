import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PrincipalContent from "./principalContent/PrincipalContent";
import InformationsContent from "./InformationsContent";
import MappingContent from "./MappingContent";

export default function MainEachMuseumPage() {
  const datasMuseumRecovered = useSelector(
    (state) => state.museums.dataRecoveredAfterClickingOnACard
  );

  // const { datasListOfBasket } = useSelector(
  //   (state) => state.basket
  // );

  const navigate = useNavigate();
  // if (datasMuseum) {
  //   localStorage.setItem("datasMuseumRecovered", datasMuseumRecovered);
  // }
  if (!datasMuseumRecovered) {
    navigate("/profile/profile-home");
    return;
  }

  return (
    <MainEachMuseumPageStyled>
      <PrincipalContent datasMuseumRecovered={datasMuseumRecovered} />
      <InformationsContent datasMuseumRecovered={datasMuseumRecovered} />
      <MappingContent datasMuseumRecovered={datasMuseumRecovered} />
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
