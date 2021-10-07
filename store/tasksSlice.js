import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdding: false,
  isAddingDetails: false,
  allListsIsOpen: false,
  optionsIsOpen: false,
  isEditingTitle: false,
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
    toggleIsEditingTitle: (state, action) => {
      state.isEditingTitle = action.payload;
    },
    editListName: (state, action) => {
      const currentList = state.currentList;
      const currentListObject = state.lists.find(
        (list) => list.name === currentList
      );

      currentListObject.name = action.payload;
      state.currentList = action.payload;
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter(
        (list) => list.name !== state.currentList
      );
      if (state.lists.length > 0) {
        state.currentList = state.lists[0].name;
      }
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
  toggleIsEditingTitle,
  editListName,
  deleteList,
} = tasksSlice.actions;

export default tasksSlice.reducer;
