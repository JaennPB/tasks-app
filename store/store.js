import { configureStore } from "@reduxjs/toolkit";

import tasksSlice from "./tasksSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    ui: uiSlice,
  },
});

export default store;
