import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdding: false,
  isAddingDetails: false,
  allListsIsOpen: false,
  optionsIsOpen: false,
  currentList: "My tasks",
  lists: [
    {
      name: "My tasks",
      uncompleted: [],
      completed: [],
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleIsAdding: (state, action) => {
      state.isAdding = action.payload;
    },
    toggleIsAddingDetails: (state, action) => {
      state.isAddingDetails = action.payload;
    },
    addTask: (state, action) => {
      if (state.currentList === "My tasks") {
        state.lists[0].uncompleted.push(action.payload);
      } else {
        state.lists
          .find((list) => list.name === action.payload)
          .uncompleted.push(action.payload);
      }
    },
    completeTask: (state, action) => {},
    removeTask: (state, action) => {},
    addList: (state, action) => {
      state.lists = [
        ...state.lists,
        {
          name: action.payload,
          uncompleted: [],
          completed: [],
        },
      ];

      state.currentList = action.payload;
    },
    switchList: (state, action) => {
      state.currentList = action.payload;
    },
    toggleAllListsModal: (state, action) => {
      state.allListsIsOpen = action.payload;
    },
    toggleOptionsModal: (state, action) => {
      state.optionsIsOpen = action.payload;
    },
  },
});

export const {
  toggleIsAdding,
  toggleIsAddingDetails,
  addTask,
  completeTask,
  removeTask,
  addList,
  switchList,
  toggleAllListsModal,
  toggleOptionsModal,
} = tasksSlice.actions;

export default tasksSlice.reducer;
