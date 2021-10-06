import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdding: false,
  currentList: "My tasks", // will change
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
    addTask: (state, action) => {
      if (currentList === "My tasks") {
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
  },
});

export const {
  toggleIsAdding,
  addTask,
  completeTask,
  removeTask,
  addList,
  switchList,
} = tasksSlice.actions;

export default tasksSlice.reducer;
