import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Error() {
  return (
    <ErrorStyled>
      <h1>Page introuvable</h1>
      <NavLink to="/" className="nav-link">
        Retour à la page d'accueil
      </NavLink>
    </ErrorStyled>
  );
}

const ErrorStyled = styled.div`
  max-width: 1500px;
  max-height: 900px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #b659b6;
  h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }
  .nav-link {
    font-size: 18px;
    text-decoration: none;
  }
`;
