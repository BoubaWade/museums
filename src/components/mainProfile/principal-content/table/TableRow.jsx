import { setIsAddSectionDisplayed } from "../../../../features/profile/displaySettingsSlice";
import { handleDataRecoveredAfterClick } from "../../../../features/profile/museumsSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export default function TableRow({ data }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setIsAddSectionDisplayed(true));
    dispatch(handleDataRecoveredAfterClick(e.target.id));
  };

  return (
    <TableRowStyled>
      <td>{data.nom_officiel_du_musee.toUpperCase()}</td>
      <td>{data.code_postal}</td>
      <td>{data.commune}</td>
      <td>{data.departement}</td>
      <td>
        <button
          id={data.identifiant_museofile}
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
