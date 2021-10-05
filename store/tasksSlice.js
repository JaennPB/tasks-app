import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentList: "mytasks", // will change
  myTasks: {
    uncompleted: [],
    completed: [],
  },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (currentList === "mytasks") {
        state.myTasks.uncompleted.push(action.payload);
      } else {
        state[currentList].uncompleted.push(action.payload);
      }
    },
    completeTask: (state, action) => {},
    removeTask: (state, action) => {},
    addList: (state, action) => {
      state = {
        ...state,
        [action.payload]: {
          uncompleted: [],
          completed: [],
        },
      };
      state.currentList = action.payload;
    },
    switchList: (state, action) => {
      state.currentList = action.payload;
    },
  },
});

export const { addTask, completeTask, removeTask, addList } =
  tasksSlice.actions;

export default tasksSlice.reducer;
