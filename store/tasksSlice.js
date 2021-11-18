import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentList: "My tasks",
  lists: [
    {
      name: "My tasks",
      uncompleted: [],
      completed: [],
    },
  ],
  addedOrModified: false,
  loading: false,
};

const currentListObjectFinder = (state) => {
  const currentListObject = state.lists.find(
    (list) => list.name === state.currentList
  );
  return currentListObject;
};

export const getAllDataAsyncStorage = createAsyncThunk(
  "tasks/getAllDataAsyncStorage",
  async () => {
    try {
      const jsonData = await AsyncStorage.getItem("@allData");
      return jsonData !== null ? JSON.parse(jsonData) : null;
    } catch (error) {
      console.log("error receiving", error);
    }
  }
);

export const sendAllDataAsyncStorage = createAsyncThunk(
  "tasks/sendAllDataAsyncStorage",
  async (data) => {
    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem("@allData", jsonData);
    } catch (error) {
      console.log("error sending", error);
    }
  }
);

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

      state.addedOrModified = true;
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

      state.addedOrModified = true;
    },
    removeTask: (state, action) => {
      const currentListObject = currentListObjectFinder(state);

      currentListObject.uncompleted = currentListObject.uncompleted.filter(
        (item) => item.title !== action.payload
      );
      currentListObject.completed = currentListObject.completed.filter(
        (item) => item.title !== action.payload
      );

      state.addedOrModified = true;
    },
    removeAllTasks: (state, action) => {
      const currentListObject = currentListObjectFinder(state);

      currentListObject.completed = [];

      state.addedOrModified = true;
    },
    addDetailsToCurrentTask: (state, action) => {
      const currentListObject = currentListObjectFinder(state);

      const currItem = currentListObject.uncompleted.find(
        (item) => item.title === action.payload.taskTitle
      );
      currItem.details = action.payload.details;

      state.addedOrModified = true;
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

      state.addedOrModified = true;
    },
    switchList: (state, action) => {
      state.currentList = action.payload;
    },
    editListName: (state, action) => {
      const currentListObject = currentListObjectFinder(state);

      currentListObject.name = action.payload;
      state.currentList = action.payload;

      state.addedOrModified = true;
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter(
        (list) => list.name !== state.currentList
      );
      if (state.lists.length > 0) {
        state.currentList = state.lists[0].name;
      }

      state.addedOrModified = true;
    },
  },
  extraReducers: {
    [getAllDataAsyncStorage.pending]: (state, action) => {},
    [getAllDataAsyncStorage.fulfilled]: (state, action) => {
      console.log("received!");
      console.log(action.payload);
      state.lists = action.payload;
    },
    [sendAllDataAsyncStorage.pending]: (state, action) => {},
    [sendAllDataAsyncStorage.fulfilled]: (state, action) => {
      console.log("sent!");
      state.addedOrModified = false;
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
