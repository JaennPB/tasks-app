import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import Dashboard from "../components/Dashboard";
import BottomControls from "../components/BottomControls";
import TasksContainer from "../components/TasksContainer";
import AddNewTaskModal from "../components/Modals/AddNewTaskModal";
import AllListsModal from "../components/Modals/AllListsModal";
import OptionsModal from "../components/Modals/OptionsModal";

import {
  getAllDataAsyncStorage,
  sendAllDataAsyncStorage,
} from "../store/tasksSlice";

import theme from "../theme/theme";

const MainScreen = () => {
  const isAdding = useSelector((state) => state.ui.isAdding);
  const allListsIsOpen = useSelector((state) => state.ui.allListsIsOpen);
  const optionsIsOpen = useSelector((state) => state.ui.optionsIsOpen);

  const allLists = useSelector((state) => state.tasks.lists);
  const addedOrModified = useSelector((state) => state.tasks.addedOrModified);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    navigation.addListener("focus", (e) => {
      // console.log("focus");
      dispatch(getAllDataAsyncStorage());
    });

    if (addedOrModified) {
      // console.log(allLists);
      dispatch(sendAllDataAsyncStorage(allLists));
    }
  }, [navigation, addedOrModified]);

  return (
    <SafeAreaView style={styles.screen}>
      <Dashboard />
      <TasksContainer />
      <BottomControls />
      {isAdding && <AddNewTaskModal />}
      {allListsIsOpen && <AllListsModal />}
      {optionsIsOpen && <OptionsModal />}
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: "center",
  },
});
