import { createSlice } from "@reduxjs/toolkit";
import {
  filterArrayById,
  findObjectInArray,
  mapArrayForChangeAddedProperty,
  mapArrayToAddDatePicked,
} from "../../utils/utils";
import { syncBothMuseums } from "../../Firebase/firebaseUtilities";
import { getBasketLocalStorage, setBasketLocalStorage } from "../../utils/user";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    datePicked: "",
    hourPicked: "",
    isReserved: false,
  },
  reducers: {
    setBasket: (state, { payload }) => {
      state.basket = payload;
    },
    handleAddItemToBasket: (state, { payload }) => {
      const payloadWithDateAndHourPicked = {
        ...payload,
        datePicked: state.datePicked,
        hourPicked: state.hourPicked,
      };
      state.basket.push(payloadWithDateAndHourPicked);
      setBasketLocalStorage(state.basket);
    },
    handleDeleteItemFromBasket: (state, { payload }) => {
      const basketUpdated = filterArrayById(state.basket, payload);
      setBasketLocalStorage(basketUpdated);
    },
    setDatePicked: (state, { payload }) => {
      state.datePicked = payload;
    },
    setHourPicked: (state, { payload }) => {
      state.hourPicked = payload;
    },
    setIsReserved: (state, { payload }) => {
      state.isReserved = payload;
    },
  },
});

export function addOneMuseumToBasket(action) {
  return function (dispatch, getState) {
    const storeState = getState();
    const { museums } = storeState.museums;
    const { basket, datePicked, hourPicked } = storeState.basket;
    const itemToAdd = findObjectInArray(museums, action);
    const isPresentToBasket = findObjectInArray(basket, action);

    if (!isPresentToBasket) {
      if (itemToAdd) {
        dispatch(handleAddItemToBasket(itemToAdd));
      }
      const museumsWithAddedProperty = mapArrayForChangeAddedProperty(
        museums,
        action,
        true
      );
      const museumsWithDatePicked = mapArrayToAddDatePicked(
        museumsWithAddedProperty,
        datePicked,
        hourPicked,
        action
      );
      syncBothMuseums(museumsWithDatePicked);
    }
  };
}

export function deleteOneToBasket(action) {
  return function (dispatch, getState) {
    const storeState = getState();
    const { museums } = storeState.museums;
    const { basket } = storeState.basket;
    const isPresentToMuseums = findObjectInArray(museums, action);
    const itemToDelete = findObjectInArray(basket, action);

    if (!isPresentToMuseums) {
      if (itemToDelete) {
        dispatch(handleDeleteItemFromBasket(itemToDelete.id));
        const basketStorage = getBasketLocalStorage();
        dispatch(setBasket(basketStorage));
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
  setDatePicked,
  setHourPicked,
  setIsReserved,
} = basketSlice.actions;
export default basketSlice.reducer;
