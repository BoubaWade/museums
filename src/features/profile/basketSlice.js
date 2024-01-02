import { createSlice } from "@reduxjs/toolkit";
import {
  filterArrayById,
  findObjectInArray,
  mapArrayForChangeAddedProperty,
} from "../../utils/utils";
import { syncBothMuseums } from "../../Firebase/firebaseUtilities";
import {
  getBasketLocalStorage,
  getUserName,
  setBasketLocalStorage,
} from "../../utils/user";
const userName = getUserName();

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
      setBasketLocalStorage(userName, state.basket);
    },
    handleDeleteItemFromBasket: (state, { payload }) => {
      const basketUpdated = filterArrayById(state.basket, payload);
      setBasketLocalStorage(userName, basketUpdated);
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
    const { basket } = storeState.basket;
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
    const { basket } = storeState.basket;
    const isPresentToMuseums = findObjectInArray(museums, action);
    const itemToDelete = findObjectInArray(basket, action);

    if (!isPresentToMuseums) {
      if (itemToDelete) {
        dispatch(handleDeleteItemFromBasket(itemToDelete.id));
        const basketStorage = getBasketLocalStorage(userName);
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
