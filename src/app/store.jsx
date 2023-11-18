import { configureStore } from "@reduxjs/toolkit";
import signSlice from "../features/sign/signSlice";
import museumsSlice from "../features/profile/museumsSlice";
import displaySettingsSlice from "../features/profile/displaySettingsSlice";
import basketSlice from "../features/profile/basketSlice";

export const store = configureStore({
  reducer: {
    sign: signSlice,
    displaySettings: displaySettingsSlice,
    museums: museumsSlice,
    basket: basketSlice,
  },
});
