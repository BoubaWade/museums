import styled from "styled-components";

export default function ButtonDisplayForm({ label, onClick }) {
  return (
    <ButtonDisplayFormStyled onClick={onClick}>{label}</ButtonDisplayFormStyled>
  );
}
const ButtonDisplayFormStyled = styled.button`
  background: none;
  color: white;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
`;
