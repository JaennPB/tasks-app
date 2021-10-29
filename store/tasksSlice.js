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

const currentListObjectFinder = (state) => {
  const currentListObject = state.lists.find(
    (list) => list.name === state.currentList
  );
  return currentListObject;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const currentListObject = currentListObjectFinder(state);

      currentListObject.uncompleted.unshift({
        title: action.payload.title,
        details: action.payload.details,
      });
    },
    completeTask: (state, action) => {
      const currentListObject = currentListObjectFinder(state);

      currentListObject.completed.unshift({
        title: action.payload.title,
        details: action.payload.details,
      });
      currentListObject.uncompleted = currentListObject.uncompleted.filter(
        (item) => item.title !== action.payload.title
      );
    },
    removeTask: (state, action) => {
      const currentListObject = currentListObjectFinder(state);

      currentListObject.uncompleted = currentListObject.uncompleted.filter(
        (item) => item.title !== action.payload
      );
      currentListObject.completed = currentListObject.completed.filter(
        (item) => item.title !== action.payload
      );
    },
    removeAllTasks: (state, action) => {
      const currentListObject = currentListObjectFinder(state);

      currentListObject.completed = [];
    },
    addDetailsToCurrentTask: (state, action) => {
      const currentListObject = currentListObjectFinder(state);

      const currItem = currentListObject.uncompleted.find(
        (item) => item.title === action.payload.taskTitle
      );
      currItem.details = action.payload.details;
    },
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
      const currentListObject = currentListObjectFinder(state);

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
  removeAllTasks,
  addDetailsToCurrentTask,
  addList,
  switchList,
  editListName,
  deleteList,
} = tasksSlice.actions;

export default tasksSlice.reducer;
