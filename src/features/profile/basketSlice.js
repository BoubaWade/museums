import { createSlice } from "@reduxjs/toolkit";
import {
  deepCopy,
  filterArrayById,
  findObjectInArray,
  mapArrayForChangeAddedProperty,
  setLocalStorage,
} from "../../utils/utils";
import { syncBothMuseums } from "../../Firebase/firebaseUtilities";

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
    const { museums } = storeState.museums;
    const itemToAdd = findObjectInArray(museums, action);
    const isPresentToBasket = findObjectInArray(basket, action);

    if (!isPresentToBasket) {
      if (itemToAdd) {
        dispatch(handleAddItemToBasket(itemToAdd));
      }
      const museumsUpdated = mapArrayForChangeAddedProperty(
        museums,
        action,
        true
      );
      syncBothMuseums(museumsUpdated);
    }
  };
}

export function deleteOneToBasket(action) {
  return function (dispatch, getState) {
    const storeState = getState();
    const { museums } = storeState.museums;
    const isPresentToMuseums = findObjectInArray(museums, action);
    const { basket } = storeState.basket;
    const itemToDelete = findObjectInArray(basket, action);

    if (!isPresentToMuseums) {
      if (itemToDelete) {
        dispatch(handleDeleteItemFromBasket(itemToDelete.id));
      }
    } else {
      const museumsUpdated = mapArrayForChangeAddedProperty(
        museums,
        action,
        false
      );
      syncBothMuseums(museumsUpdated);
      if (itemToDelete) {
        dispatch(handleDeleteItemFromBasket(itemToDelete.id));
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
