import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    datasListOfBasket: [],
    datePicked: "",
    isReserved: false,
  },
  reducers: {
    setDatasListOfBasket: (state, { payload }) => {
      state.datasListOfBasket = payload;
    },
    handleAddItemToBasket: (state, { payload }) => {
      state.datasListOfBasket.push(payload);
      localStorage.setItem("Basket", JSON.stringify(state.datasListOfBasket));
    },
    handleDeleteItemFromBasket: (state, { payload }) => {
      const copyDatasBasket = [...state.datasListOfBasket];
      const datasListOfBasketUpdated = copyDatasBasket.filter(
        (data) => data.identifiant_museofile !== payload
      );
      localStorage.setItem("Basket", JSON.stringify(datasListOfBasketUpdated));
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

    const isPresentToBasket = storeState.basket.datasListOfBasket.find(
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

    const isPresentToMuseums = storeState.museums.datasMuseums?.find(
      (data) => data.identifiant_museofile === action
    );
    if (!isPresentToMuseums) {
      const itemToDelete = storeState.basket.datasListOfBasket.find(
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
  setDatasListOfBasket,
  handleAddItemToBasket,
  handleDeleteItemFromBasket,
  handleRecoverDatePicked,
  setIsReserved,
} = basketSlice.actions;
export default basketSlice.reducer;
