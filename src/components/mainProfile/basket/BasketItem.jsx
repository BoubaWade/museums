import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleDeleteItemFromBasket } from "../../../features/profile/basketSlice";

export default function BasketCard({ data }) {
  const { nom_officiel_du_musee, commune } = data;
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(handleDeleteItemFromBasket(data.identifiant_museofile));
  };

  return (
    <BasketCardStyled>
      <h3>{nom_officiel_du_musee.toUpperCase()}</h3>
      <p>{commune}</p>
      <MdDelete className="icon-delete" onClick={handleDeleteItem} />
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.article`
  background-color: #0080008a;
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  h3 {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 11px;
  }
  p {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 11px;
  }
  .icon-delete {
    display: none;
    color: #ff0000b2;
    width: 30px;
    font-size: 20px;
    cursor: pointer;
  }
  &:hover {
    .icon-delete {
      display: block;
    }
  }
`;
