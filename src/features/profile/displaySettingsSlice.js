import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavSwitchButtonActived: false,
  isMainSwitchButtonActived: false,
  isPopUpDisplayed: false,
  isBasketDisplayed: false,
  isButtonAddDisplayed: true,
  isDisplayUpdateCardModal: false,
  isAddSectionDisplayed: false,
  isDetailsPanelDisplayed: false,
  showEditProfile: true,
  showSettingsProfile: false,
};

const displaySettingsSlice = createSlice({
  name: "displaySettings",
  initialState,
  reducers: {
    setIsNavSwitchButtonActived: (state) => {
      state.isNavSwitchButtonActived = !state.isNavSwitchButtonActived;
    },
    setIsMainSwitchButtonActived: (state) => {
      state.isMainSwitchButtonActived = !state.isMainSwitchButtonActived;
    },
    setIsPopUpDisplayed: (state, { payload }) => {
      state.isPopUpDisplayed = payload;
    },
    setIsBasketDisplayed: (state, { payload }) => {
      state.isBasketDisplayed = payload;
    },
    setIsButtonAddDisplayed: (state, { payload }) => {
      state.isButtonAddDisplayed = payload;
    },
    setIsDisplayUpdateCardModal: (state, { payload }) => {
      state.isDisplayUpdateCardModal = payload;
    },
    setIsAddSectionDisplayed: (state, { payload }) => {
      state.isAddSectionDisplayed = payload;
    },
    setIsDetailsPanelDisplayed: (state) => {
      state.isDetailsPanelDisplayed = !state.isDetailsPanelDisplayed;
    },
    setShowEditProfile: (state, { payload }) => {
      state.showEditProfile = payload;
    },
    setShowSettingsProfile: (state, { payload }) => {
      state.showSettingsProfile = payload;
    },
  },
});

export const {
  setIsNavSwitchButtonActived,
  setIsMainSwitchButtonActived,
  setIsPopUpDisplayed,
  setIsBasketDisplayed,
  setIsButtonAddDisplayed,
  setIsDisplayUpdateCardModal,
  setIsAddSectionDisplayed,
  setIsDetailsPanelDisplayed,
  setShowEditProfile,
  setShowSettingsProfile,
} = displaySettingsSlice.actions;

export default displaySettingsSlice.reducer;
