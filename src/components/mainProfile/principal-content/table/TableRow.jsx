import { setIsAddSectionDisplayed } from "../../../../features/profile/displaySettingsSlice";
import { handleRecoverOneMuseumDataFromAPI } from "../../../../features/profile/museumsSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export default function TableRow({ data }) {
  const {
    nom_officiel_du_musee,
    code_postal,
    commune,
    departement,
    identifiant_museofile,
  } = data;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setIsAddSectionDisplayed(true));
    dispatch(handleRecoverOneMuseumDataFromAPI(e.target.id));
  };

  return (
    <TableRowStyled>
      <td>{nom_officiel_du_musee.toUpperCase()}</td>
      <td>{code_postal}</td>
      <td>{commune}</td>
      <td>{departement}</td>
      <td>
        <button
          id={identifiant_museofile}
          className="visualization"
          onClick={(e) => handleClick(e)}
        >
          Visualiser
        </button>
      </td>
    </TableRowStyled>
  );
}

const TableRowStyled = styled.tr`
  .visualization {
    background: #b659b6;
    width: 70px;
    height: 25px;
    color: whitesmoke;
    font-size: 12px;
    border: #b659b6;
    border-radius: 5px;
    cursor: pointer;
    &:active {
      background: #0080008a;
      color: whitesmoke;
    }
  }
`;
