import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMuseumsFromAPI } from "../../../../features/profile/museumsSlice";
import { getMuseumsFiltered } from "../../../../utils/museums";
import TableRow from "./TableRow";
import Loader from "../../../reusable-ui/Loader";
import TableHeader from "./TableHeader";
import EmptyMuseums from "../../../reusable-ui/EmptyMuseums";

export default function Table() {
  const { museumsFromAPI, search } = useSelector((state) => state.museums);
  const museumsFiltered = getMuseumsFiltered(museumsFromAPI, search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMuseumsFromAPI());
  }, []);

  if (!museumsFiltered) return <Loader />;

  if (museumsFiltered.length === 0) return <EmptyMuseums word="trouvés" />;

  return (
    <TableStyled>
      <tbody>
        <TableHeader />
        {museumsFiltered.map((data) => (
          <TableRow key={data.id} data={data} />
        ))}
      </tbody>
    </TableStyled>
  );
}

const TableStyled = styled.table`
  background-color: white;
  width: 95%;
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
  @media screen and (max-width: 900px) {
    tr {
      td {
        font-size: 12px;
        padding: 2px 10px;
      }
      th {
        font-size: 12px;
        padding: 2px 10px;
      }
    }
  }
  @media screen and (max-width: 650px) {
    tr {
      td {
        &:nth-child(4) {
          display: none;
        }
      }
      th {
        &:nth-child(4) {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    tr {
      td {
        &:nth-child(2) {
          display: none;
        }
      }
      th {
        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    tr {
      td {
        &:nth-child(3) {
          display: none;
        }
      }
      th {
        &:nth-child(3) {
          display: none;
        }
      }
    }
  }
`;
