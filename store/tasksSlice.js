import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    addTask: (state, action) => {
      const currentList = state.currentList;
      const currentListObject = state.lists.find(
        (list) => list.name === currentList
      );

      currentListObject.uncompleted.unshift(action.payload);
    },
    completeTask: (state, action) => {
      const currentListObject = state.lists.find(
        (list) => list.name === state.currentList
      );
      currentListObject.completed.unshift(action.payload);
      currentListObject.uncompleted = currentListObject.uncompleted.filter(
        (item) => item !== action.payload
      );
    },
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
  addTask,
  completeTask,
  removeTask,
  addList,
  switchList,
  editListName,
  deleteList,
} = tasksSlice.actions;

export default tasksSlice.reducer;
