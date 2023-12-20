import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  handleAddItemToBasket,
  handleDeleteItemFromBasket,
} from "./basketSlice";
import { addPropertyToDataFetched } from "../../utils/utils";
import { syncBothListMuseums } from "../../Firebase/firebaseUtilities";

export const getDatasMuseumsFromAPI = createAsyncThunk(
  "user/getDatasMuseums",
  async (_, { dispatch }) => {
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
    // datasMuseums: museumsFakeDatas,
    datasMuseums: [],
    loadingData: true,
    datasMuseumsFromAPI: [],
    loadingDataFromAPI: true,
    dataRecoveredAfterClick: {},
    search: "",
    dataUpdatedCard: {},
    dataRecoveredAfterClickingOnACard: null,
    dataSettings: {},
    selectedFile: null,
    dataRecoveredWithDatePicked: {},
  },
  reducers: {
    setDatasMuseums: (state, { payload }) => {
      state.datasMuseums = payload;
    },
    setDatasMuseumsFromAPI: (state, { payload }) => {
      state.datasMuseumsFromAPI = payload;
    },
    handleRecoverOneMuseumDataFromAPI: (state, { payload }) => {
      state.dataRecoveredAfterClick = state.datasMuseumsFromAPI.find(
        (data) => data.identifiant_museofile === payload
      );
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    handleAddMuseum: (state, { payload }) => {
      const isPresentToMuseumsList = state.datasMuseums.find(
        (data) => data.identifiant_museofile === payload.identifiant_museofile
      );
      if (!isPresentToMuseumsList) {
        state.datasMuseums?.unshift(payload);
        syncBothListMuseums(state.datasMuseums);
      }
    },
    handleDeleteMuseum: (state, { payload }) => {
      const copyDatasMuseums = [...state.datasMuseums];
      const datasMuseumsFiltered = copyDatasMuseums.filter(
        (data) => data.identifiant_museofile !== payload
      );
      syncBothListMuseums(datasMuseumsFiltered);
    },

    handleAddDataToUpdatedCard: (state, { payload }) => {
      state.dataUpdatedCard = payload;
    },
    handleUpdateAMuseum: (state, { payload }) => {
      state.datasMuseums = payload;
    },
    handleRecoverDataAfterClick: (state, { payload }) => {
      state.dataRecoveredAfterClickingOnACard = state.datasMuseums.find(
        (data) => data.identifiant_museofile === payload
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
      .addCase(getDatasMuseumsFromAPI.pending, (state) => {
        state.loadingDataFromAPI = true;
      })
      .addCase(getDatasMuseumsFromAPI.fulfilled, (state, { payload }) => {
        state.loadingDataFromAPI = false;
        state.datasMuseumsFromAPI = payload;
      })
      .addCase(getDatasMuseumsFromAPI.rejected, (state, action) => {
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
  setDatasMuseums,
  setDatasMuseumsFromAPI,
  handleRecoverOneMuseumDataFromAPI,
  setSearch,
  handleAddMuseum,
  handleDeleteMuseum,
  handleAddDataToUpdatedCard,
  handleUpdateAMuseum,
  handleRecoverDataAfterClick,
  handleRecoveredDataWithDatePicked,
  setDataSettings,
  setSelectedFile,
} = museumsSlice.actions;
export default museumsSlice.reducer;
