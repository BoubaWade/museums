import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../features/sign/signSlice";
import museumsReducer from "../features/profile/museumsSlice";
import displaySettingsReducer from "../features/profile/displaySettingsSlice";
import basketReducer from "../features/profile/basketSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      sign: signReducer,
      displaySettings: displaySettingsReducer,
      museums: museumsReducer,
      basket: basketReducer,
    },
  });
export const store = createStore();
