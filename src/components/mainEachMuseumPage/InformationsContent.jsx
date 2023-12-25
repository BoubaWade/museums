import styled from "styled-components";
import ListMuseumInfos from "../reusable-ui/ListMuseumInfos";
import CalendarContent from "./CalendarContent";

export default function InformationsContent({ museumRecovered }) {
  return (
    <InformationsContentStyled>
      <h3>Informations</h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          autem officia consequuntur placeat quia optio facilis aliquam
          dignissimos tenetur, consectetur ipsam maxime rerum rem ipsa?
        </p>
        <ListMuseumInfos museumRecovered={museumRecovered} />
        <CalendarContent museumRecovered={museumRecovered} />
      </div>
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
  p {
    padding: 10px;
  }
`;
