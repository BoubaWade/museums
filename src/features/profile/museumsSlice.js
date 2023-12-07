import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { museumsFakeDatas } from "../../config/fakeDatas";
import {
  handleAddItemToBasket,
  handleDeleteItemFromBasket,
} from "./basketSlice";
import { addPropertyToDataFetched } from "../../utils/utils";

export const getDatasMuseums = createAsyncThunk(
  "user/getDatasMuseums",
  async (_, { dispatch, getState }) => {
    fetch(
      "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/liste-et-localisation-des-musees-de-france/records?limit=100&refine=region_administrative%3A%22%C3%8Ele-de-France%22"
    )
      .then((res) => res.json())
      .then((response) => {
        const datas = addPropertyToDataFetched(response.results);
        dispatch(setDatasMuseumsFromAPI(datas));
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const museumsSlice = createSlice({
  name: "museums",
  initialState: {
    datasMuseums: museumsFakeDatas,
    datasMuseumsFromAPI: [],
    loadingDataFromAPI: true,
    dataRecoveredAfterClick: {},
    search: "",
    dataUpdatedCard: {},
    dataRecoveredAfterClickingOnACard: null,
  },
  reducers: {
    setDatasMuseumsFromAPI: (state, { payload }) => {
      state.datasMuseumsFromAPI = payload;
    },
    handleDataRecoveredAfterClick: (state, { payload }) => {
      state.dataRecoveredAfterClick = state.datasMuseumsFromAPI.find(
        (data) => data.identifiant_museofile === payload
      );
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    handleAddMuseum: (state, { payload }) => {
      state.datasMuseums.unshift(payload);
    },
    handleDeleteCard: (state, { payload }) => {
      const copyDatasMuseums = [...state.datasMuseums];
      state.datasMuseums = copyDatasMuseums.filter(
        (data) => data.identifiant_museofile !== payload
      );
    },
    handleAddDataToUpdatedCard: (state, { payload }) => {
      state.dataUpdatedCard = payload;
    },
    handleUpdateAMuseum: (state, { payload }) => {
      state.datasMuseums = payload;
    },
    handleRecoverDataAfterClickingOnACard: (state, { payload }) => {
      state.dataRecoveredAfterClickingOnACard = state.datasMuseums.find(
        (data) => data.identifiant_museofile === payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDatasMuseums.pending, (state) => {
        state.loadingDataFromAPI = true;
      })
      .addCase(getDatasMuseums.fulfilled, (state, { payload }) => {
        state.loadingDataFromAPI = false;
        state.datasMuseumsFromAPI = payload;
      })
      .addCase(getDatasMuseums.rejected, (state, action) => {
        state.loadingDataFromAPI = false;
        state.error = action.error.message;
      })
      .addCase(handleAddItemToBasket, (state, { payload }) => {
        state.datasMuseums.find(
          (data) => data.identifiant_museofile === payload.identifiant_museofile
        ).isAdded = true;
      })
      .addCase(handleDeleteItemFromBasket, (state, { payload }) => {
        const item = state.datasMuseums.find(
          (data) => data.identifiant_museofile === payload
        );
        if (item) {
          item.isAdded = false;
        }
      });
  },
});

export const {
  setDatasMuseumsFromAPI,
  handleDataRecoveredAfterClick,
  setSearch,
  handleAddMuseum,
  handleDeleteCard,
  handleAddDataToUpdatedCard,
  handleUpdateAMuseum,
  handleRecoverDataAfterClickingOnACard,
} = museumsSlice.actions;
export default museumsSlice.reducer;
