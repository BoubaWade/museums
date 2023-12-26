import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMuseumsFromAPI } from "../../../../features/profile/museumsSlice";
import { getMuseumsFiltered } from "../../../../utils/utils";
import TableRow from "./TableRow";

export default function Table() {
  const { museumsFromAPI, search } = useSelector((state) => state.museums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMuseumsFromAPI());
  }, []);

  const museumsFiltered = getMuseumsFiltered(museumsFromAPI, search);

  return (
    <TableStyled>
      <tbody>
        <tr>
          <th>Nom du musée</th>
          <th>Code Postal</th>
          <th>Commune</th>
          <th>Département</th>
        </tr>
        {museumsFiltered?.map((data) => (
          <TableRow key={data.id} data={data} />
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
