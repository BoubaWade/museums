import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getDatasMuseums } from "../../../../features/profile/museumsSlice";
import { getDatasMuseumsFiltered } from "../../../../utils/utils";
import TableRow from "./TableRow";

export default function Table() {
  const { datasMuseumsFromAPI, search } = useSelector((state) => state.museums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatasMuseums());
  }, []);

  const datasMuseumsFiltered = getDatasMuseumsFiltered(
    datasMuseumsFromAPI,
    search
  );

  return (
    <TableStyled>
      <tbody>
        <tr>
          <th>Nom du musée</th>
          <th>Code Postal</th>
          <th>Commune</th>
          <th>Département</th>
        </tr>
        {datasMuseumsFiltered?.map((data) => (
          <TableRow key={data.identifiant_museofile} data={data} />
        ))}
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
  .empty-cards {
    font-size: 18px;
    color: #000000b5;
  }
`;
