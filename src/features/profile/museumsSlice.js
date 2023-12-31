import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleAddItemToBasket } from "./basketSlice";
import { syncBothMuseums } from "../../Firebase/firebaseUtilities";
import {
  arrayUpdatedById,
  filterArrayById,
  findObjectInArray,
  handleRenameKeysObjectOfArray,
  mapArrayForChangeAddedProperty,
} from "../../utils/utils";

export const getMuseumsFromAPI = createAsyncThunk(
  "user/getMuseums",
  async (_, { dispatch, getState }) => {
    const { museums } = getState().museums;
    fetch(
      "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/liste-et-localisation-des-musees-de-france/records?limit=100&refine=region_administrative%3A%22%C3%8Ele-de-France%22"
    )
      .then((res) => res.json())
      .then((response) => {
        const responseUpdated = handleRenameKeysObjectOfArray(response.results);
        const filteredArray = responseUpdated.filter(
          (item2) => !museums.find((item1) => item1.id === item2.id)
        );
        dispatch(setMuseumsFromAPI(filteredArray));
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
    museumUpdated: {},
    dataSettings: {},
    museumRecovered: null,
    selectedFile: null,
    search: "",
    isAscending: false,
  },
  reducers: {
    setMuseums: (state, { payload }) => {
      state.museums = payload;
    },
    setMuseumsFromAPI: (state, { payload }) => {
      state.museumsFromAPI = payload;
    },
    handleRecoverMuseumFromAPI: (state, { payload }) => {
      state.museumRecoveredAfterClick = findObjectInArray(
        state.museumsFromAPI,
        payload
      );
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setIsAscending: (state) => {
      state.isAscending = !state.isAscending;
    },

    handleAddMuseum: (state, { payload }) => {
      const isPresentToMuseums = findObjectInArray(state.museums, payload.id);
      if (!isPresentToMuseums) {
        state.museums?.unshift(payload);
        syncBothMuseums(state.museums);
      }
    },

    handleDeleteMuseum: (state, { payload }) => {
      const museumsFiltered = filterArrayById(state.museums, payload);
      syncBothMuseums(museumsFiltered);
    },

    handleUpdateMuseum: (state, { payload }) => {
      const museumsUpdated = arrayUpdatedById(state.museums, payload);
      syncBothMuseums(museumsUpdated);
    },

    handleAddDataToUpdatedCard: (state, { payload }) => {
      state.museumUpdated = payload;
    },
    handleRecoverDataAfterClick: (state, { payload }) => {
      state.museumRecovered = findObjectInArray(state.museums, payload);
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
        const museumsUpdated = mapArrayForChangeAddedProperty(
          state.museums,
          payload.id,
          true
        );
        syncBothMuseums(museumsUpdated);
      });
  },
});

export const {
  setMuseums,
  setMuseumsFromAPI,
  handleRecoverMuseumFromAPI,
  setSearch,
  setIsAscending,
  handleAddMuseum,
  handleDeleteMuseum,
  handleAddDataToUpdatedCard,
  handleUpdateMuseum,
  handleRecoverDataAfterClick,
  setDataSettings,
  setSelectedFile,
} = museumsSlice.actions;
export default museumsSlice.reducer;
