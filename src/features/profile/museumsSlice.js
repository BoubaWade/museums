import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { museumsFakeDatas } from "../../config/fakeDatas";
import {
  handleAddItemToBasket,
  handleDeleteItemFromBasket,
} from "./basketSlice";
import { addPropertyToDataFetched } from "../../utils/utils";
import { getDatasMuseumsInFirestore } from "../../Firebase/firebaseUtilities";

export const getDatasMuseumsFromFirestore = createAsyncThunk(
  "user/getDatasMuseums",
  async (_, { dispatch, getState }) => {
    getDatasMuseumsInFirestore("JpUUO3A2iLNNk4CAp60m")
      .then((response) => {
        dispatch(setDatasMuseumsFromFirestore(response));
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const getDatasMuseumsFromAPI = createAsyncThunk(
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
    setDatasMuseumsFromFirestore: (state, { payload }) => {
      state.datasMuseums = payload;
    },
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
  extraReducers: (builder) => {
    builder
      .addCase(getDatasMuseumsFromFirestore.pending, (state) => {
        state.loadingData = true;
      })
      .addCase(getDatasMuseumsFromFirestore.fulfilled, (state, { payload }) => {
        state.loadingData = false;
        state.datasMuseums = payload;
      })
      .addCase(getDatasMuseumsFromFirestore.rejected, (state, action) => {
        state.loadingData = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setDatasMuseumsFromFirestore,
  setDatasMuseumsFromAPI,
  handleDataRecoveredAfterClick,
  setSearch,
  handleAddMuseum,
  handleDeleteCard,
  handleAddDataToUpdatedCard,
  handleUpdateAMuseum,
  handleRecoverDataAfterClickingOnACard,
  handleRecoveredDataWithDatePicked,
  setDataSettings,
  setSelectedFile,
} = museumsSlice.actions;
export default museumsSlice.reducer;
