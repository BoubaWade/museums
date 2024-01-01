import styled from "styled-components";

export default function EmptyMuseums({word}) {
  return <EmptyMuseumsStyled>Pas de musées {word}</EmptyMuseumsStyled>;
}
const EmptyMuseumsStyled = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin-top:90px;
`;
