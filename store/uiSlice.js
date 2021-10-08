import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdding: false,
  isAddingDetails: false,
  allListsIsOpen: false,
  optionsIsOpen: false,
  isEditingTitle: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleIsAdding: (state, action) => {
      // adding task
      state.isAdding = action.payload;
    },
    toggleIsAddingDetails: (state, action) => {
      // adding task details
      state.isAddingDetails = action.payload;
    },
    toggleAllListsModal: (state, action) => {
      // open lists modal
      state.allListsIsOpen = action.payload;
    },
    toggleOptionsModal: (state, action) => {
      // open options modal
      state.optionsIsOpen = action.payload;
    },
    toggleIsEditingTitle: (state, action) => {
      // editing title
      state.isEditingTitle = action.payload;
    },
  },
});

export const {
  toggleIsAdding,
  toggleIsAddingDetails,
  toggleAllListsModal,
  toggleOptionsModal,
  toggleIsEditingTitle,
} = uiSlice.actions;

export default uiSlice.reducer;
