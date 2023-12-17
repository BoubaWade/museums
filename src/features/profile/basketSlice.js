import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    datasItemsOfBasket: [],
    datePicked: "",
    isReserved: false,
  },
  reducers: {
    handleAddItemToBasket: (state, { payload }) => {
      state.datasItemsOfBasket.push(payload);
    },

    handleDeleteItemFromBasket: (state, { payload }) => {
      const copyDatasBasket = [...state.datasItemsOfBasket];
      state.datasItemsOfBasket = copyDatasBasket.filter(
        (data) => data.identifiant_museofile !== payload
      );
    },
    handleRecoverDatePicked: (state, { payload }) => {
      state.datePicked = payload;
    },
    setIsReserved: (state, { payload }) => {
      state.isReserved = payload;
    },
  },
});

export function addOneToBasket(action) {
  return function (dispatch, getState) {
    const storeState = getState();

    const isPresentToBasket = storeState.basket.datasItemsOfBasket.find(
      (data) => data.identifiant_museofile === action
    );

    if (!isPresentToBasket) {
      const itemToAdd = storeState.museums.datasMuseums.find(
        (data) => data.identifiant_museofile === action
      );
      dispatch(handleAddItemToBasket(itemToAdd));
    }
  };
}

export function deleteOneToBasket(action) {
  return function (dispatch, getState) {
    const storeState = getState();

    const isPresentToMuseumsList = storeState.museums.datasMuseums.find(
      (data) => data.identifiant_museofile === action
    );

    if (!isPresentToMuseumsList) {
      const itemToDelete = storeState.basket.datasItemsOfBasket.find(
        (data) => data.identifiant_museofile === action
      );
      if (itemToDelete) {
        dispatch(
          handleDeleteItemFromBasket(itemToDelete?.identifiant_museofile)
        );
      }
    }
  };
}

export const {
  handleAddItemToBasket,
  handleDeleteItemFromBasket,
  handleRecoverDatePicked,
  setIsReserved,
} = basketSlice.actions;
export default basketSlice.reducer;
