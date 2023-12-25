import styled from "styled-components";
import Card from "./Card";
import {useDispatch, useSelector } from "react-redux";
import { getLocalStorage, getMuseumsFiltered } from "../../../../utils/utils";
import { getMuseumsInFirestore } from "../../../../Firebase/firebaseUtilities";
import { setMuseums } from "../../../../features/profile/museumsSlice";
import { useEffect } from "react";
import { setBasket } from "../../../../features/profile/basketSlice";

export default function CardContainer() {
  const { museums, search } = useSelector((state) => state.museums);
  const museumsFiltered = getMuseumsFiltered(museums, search);

  const dispatch = useDispatch();

  const initialiseMuseumsList = async () => {
    const museumsList = await getMuseumsInFirestore();
    if (museumsList) dispatch(setMuseums(museumsList));
  };
  const initialiseBasketList = async () => {
    const basketLocalStorage = getLocalStorage("Basket");
    dispatch(setBasket(basketLocalStorage));
  };
  const initialiseBasketAndMuseums = async () => {
    await initialiseMuseumsList();
    initialiseBasketList();
  };

  useEffect(() => {
    initialiseBasketAndMuseums();
  }, []);

  if (museumsFiltered === undefined) return <div>Chargement...</div>;

  if (museumsFiltered.length === 0) {
    return (
      <CardContainerStyled>
        <p className="empty-card">Pas de musées trouvés</p>
      </CardContainerStyled>
    );
  }

  return (
    <CardContainerStyled>
      {museumsFiltered.map((data) => (
        <Card key={data.identifiant_museofile} data={data} />
      ))}
    </CardContainerStyled>
  );
}

const CardContainerStyled = styled.ul`
  background-color: white;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;
  row-gap: 50px;
  margin: 40px auto 80px;
  padding: 50px 20px;
  border-radius: 15px;
  box-shadow: 0px 1px 6px 3px rgba(179, 179, 179, 0.75);
  .empty-card {
    font-size: 18px;
    color: red;
  }
`;
