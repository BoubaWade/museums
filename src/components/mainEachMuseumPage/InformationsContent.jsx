import styled from "styled-components";
import ListMuseumInfos from "../reusable-ui/ListMuseumInfos";
import CalendarContent from "./CalendarContent";

export default function InformationsContent({ museumRecovered }) {
  return (
    <InformationsContentStyled>
      <h3>Informations</h3>
      <ListMuseumInfos museumRecovered={museumRecovered} />
      <CalendarContent museumRecovered={museumRecovered} />
    </InformationsContentStyled>
  );
}

const InformationsContentStyled = styled.div`
  width: 100%;
  height: 610px;
  border: 1.5px solid #b659b65f;
  border-radius: 5px;
  h3 {
    background-color: #f6e9f6;
    padding: 10px;
  }
  @media screen and (max-width: 860px) {
    h3 {
      font-size: 18px;
    }
  }
`;
