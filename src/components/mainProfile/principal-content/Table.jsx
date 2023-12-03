import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getDatasMuseums,
  handleDataRecoveredAfterClick,
} from "../../../features/profile/museumsSlice";
import { setIsAddSectionDisplayed } from "../../../features/profile/displaySettingsSlice";
import { normalizeString } from "../../../utils/utils";

export default function Table() {
  const { datasMuseumsFromAPI, search } = useSelector((state) => state.museums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatasMuseums());
  }, []);

  const datasMuseumsFiltered = datasMuseumsFromAPI?.filter((data) => {
    if (search.length > 1) {
      return (
        normalizeString(data.nom_officiel_du_musee).includes(
          normalizeString(search)
        ) ||
        normalizeString(data.commune).includes(normalizeString(search)) ||
        normalizeString(data.departement).includes(normalizeString(search)) ||
        normalizeString(data.code_postal).includes(normalizeString(search))
      );
    } else {
      return datasMuseumsFromAPI;
    }
  });

  const handleClick = (e) => {
    dispatch(setIsAddSectionDisplayed(true));
    dispatch(handleDataRecoveredAfterClick(e.target.id));
    // handleScroll();
    console.log(e)
    // window.scrollIntoView({ behavior: "smooth" })
  };

  return (
    <TableStyled>
      <tbody>
        <tr>
          <th>Nom du musée</th>
          <th>Code Postal</th>
          <th>Commune</th>
          <th>Département</th>
          <th></th>
        </tr>
        {datasMuseumsFiltered &&
          datasMuseumsFiltered.map((data) => {
            return (
              <tr key={data.identifiant_museofile}>
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
              </tr>
            );
          })}
      </tbody>
    </TableStyled>
  );
}

const TableStyled = styled.table`
  background-color: white;
  width: 90%;
  margin: 0 auto 40px;
  border-collapse: collapse;
  tr {
    &:first-child {
      background-color: white;

      font-weight: 500;
      border: 2px solid #b659b6;
    }
    td {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      border: 2px solid #b669b6;
      padding: 5px 15px;
    }
  }
  tbody {
    &:nth-child(odd) {
      /* background-color: #f1b1f169; */
    }
  }
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
  .empty-cards {
    font-size: 18px;
    color: #000000b5;
  }
`;
