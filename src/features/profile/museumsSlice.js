import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleAddItemToBasket } from "./basketSlice";
import {
  addPropertyToDataFetched,
  arrayUpdatedById,
  deepCopy,
  filterArrayById,
  findObjectInArray,
  mapArrayForChangeAddedProperty,
} from "../../utils/utils";
import { syncBothMuseums } from "../../Firebase/firebaseUtilities";

export const getMuseumsFromAPI = createAsyncThunk(
  "user/getMuseums",
  async (_, { dispatch }) => {
    fetch(
      "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/liste-et-localisation-des-musees-de-france/records?limit=100&refine=region_administrative%3A%22%C3%8Ele-de-France%22"
    )
      .then((res) => res.json())
      .then((response) => {
        const datas = addPropertyToDataFetched(response.results);
        dispatch(setMuseumsFromAPI(datas));
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const museumsSlice = createSlice({
  name: "museums",
  initialState: {
    museums: undefined,
    loadingData: true,
    museumsFromAPI: [],
    loadingDataFromAPI: true,
    museumRecoveredAfterClick: {},
    search: "",
    museumUpdated: {},
    museumRecovered: null,
    dataSettings: {},
    selectedFile: null,
    dataRecoveredWithDatePicked: {},
  },
  reducers: {
    setMuseums: (state, { payload }) => {
      state.museums = payload;
    },
    setMuseumsFromAPI: (state, { payload }) => {
      state.museumsFromAPI = payload;
    },
    handleRecoverOneMuseumDataFromAPI: (state, { payload }) => {
      state.museumRecoveredAfterClick = findObjectInArray(
        state.museumsFromAPI,
        payload
      );
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },

    handleAddMuseum: (state, { payload }) => {
      const isPresentToMuseums = findObjectInArray(
        state.museums,
        payload.identifiant_museofile
      );
      if (!isPresentToMuseums) {
        state.museums?.unshift(payload);
        syncBothMuseums(state.museums);
      }
    },

    handleDeleteMuseum: (state, { payload }) => {
      const museumsCopy = deepCopy(state.museums);
      const museumsFiltered = filterArrayById(museumsCopy, payload);
      syncBothMuseums(museumsFiltered);
    },

    handleUpdateMuseum: (state, { payload }) => {
      const museumsCopy = deepCopy(state.museums);
      const museumsUpdated = arrayUpdatedById(museumsCopy, payload);
      syncBothMuseums(museumsUpdated);
    },

    handleAddDataToUpdatedCard: (state, { payload }) => {
      state.museumUpdated = payload;
    },
    handleRecoverDataAfterClick: (state, { payload }) => {
      state.museumRecovered = findObjectInArray(
        state.museums,
        payload
      );
    },
    handleRecoveredDataWithDatePicked: (state, { payload }) => {
      state.dataRecoveredWithDatePicked = payload;
    },
    setDataSettings: (state, { payload }) => {
      state.dataSettings = payload;
    },
    setSelectedFile: (state, { payload }) => {
      state.selectedFile = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMuseumsFromAPI.pending, (state) => {
        state.loadingDataFromAPI = true;
      })
      .addCase(getMuseumsFromAPI.fulfilled, (state, { payload }) => {
        state.loadingDataFromAPI = false;
        state.museumsFromAPI = payload;
      })
      .addCase(getMuseumsFromAPI.rejected, (state, action) => {
        state.loadingDataFromAPI = false;
        state.error = action.error.message;
      })
      .addCase(handleAddItemToBasket, (state, { payload }) => {
        const museumsCopy = deepCopy(state.museums);
        const museumsUpdated = mapArrayForChangeAddedProperty(
          museumsCopy,
          payload.identifiant_museofile,
          true
        );
        syncBothMuseums(museumsUpdated);
      });
  },
});

export function updateAddedPropertyForMuseums(objectId) {
  return function (dispatch, getState) {
    const storeState = getState();
    const { basket } = storeState.basket;
    const { museums } = storeState.museums;

    const isPresentToBasket = findObjectInArray(basket, objectId);

    if (!isPresentToBasket) {
      const museumsListUpdated = mapArrayForChangeAddedProperty(
        museums,
        objectId,
        false
      );
      syncBothMuseums(museumsListUpdated);
    }
  };
}

export const {
  setMuseums,
  setMuseumsFromAPI,
  handleRecoverOneMuseumDataFromAPI,
  setSearch,
  handleAddMuseum,
  handleDeleteMuseum,
  handleAddDataToUpdatedCard,
  handleUpdateMuseum,
  handleRecoverDataAfterClick,
  handleRecoveredDataWithDatePicked,
  setDataSettings,
  setSelectedFile,
} = museumsSlice.actions;
export default museumsSlice.reducer;
