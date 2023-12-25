import { createSlice } from "@reduxjs/toolkit";
import {
  deepCopy,
  filterArrayById,
  findObjectInArray,
  setLocalStorage,
} from "../../utils/utils";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    datePicked: "",
    isReserved: false,
  },
  reducers: {
    setBasket: (state, { payload }) => {
      state.basket = payload;
    },
    handleAddItemToBasket: (state, { payload }) => {
      state.basket.push(payload);
      setLocalStorage("Basket", state.basket);
    },
    handleDeleteItemFromBasket: (state, { payload }) => {
      const basketCopy = deepCopy(state.basket);
      const basketUpdated = filterArrayById(basketCopy, payload);
      setLocalStorage("Basket", basketUpdated);
    },
    handleRecoverDatePicked: (state, { payload }) => {
      state.datePicked = payload;
    },
    setIsReserved: (state, { payload }) => {
      state.isReserved = payload;
    },
  },
});

export function addOneMuseumToBasket(action) {
  return function (dispatch, getState) {
    const storeState = getState();
    const { basket } = storeState.basket;
    const isPresentToBasket = findObjectInArray(basket, action);

    if (!isPresentToBasket) {
      const { museums } = storeState.museums;
      const itemToAdd = findObjectInArray(museums, action);
      dispatch(handleAddItemToBasket(itemToAdd));
    }
  };
}

export function deleteOneToBasket(action) {
  return function (dispatch, getState) {
    const storeState = getState();
    const { museums } = storeState.museums;
    const isPresentToMuseums = findObjectInArray(museums, action);

    if (!isPresentToMuseums) {
      const { basket } = storeState.basket;
      const itemToDelete = findObjectInArray(basket, action);

      if (itemToDelete) {
        const { identifiant_museofile } = itemToDelete;
        dispatch(handleDeleteItemFromBasket(identifiant_museofile));
      }
    }
  };
}

export const {
  setBasket,
  handleAddItemToBasket,
  handleDeleteItemFromBasket,
  handleRecoverDatePicked,
  setIsReserved,
} = basketSlice.actions;
export default basketSlice.reducer;
