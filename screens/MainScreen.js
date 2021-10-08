import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { useSelector } from "react-redux";

import Dashboard from "../components/Dashboard";
import ControlsContainer from "../components/ControlsContainer";
import TasksContainer from "../components/TasksContainer";
import AddNewTaskModal from "../components/Modals/AddNewTaskModal";
import AllListsModal from "../components/Modals/AllListsModal";
import OptionsModal from "../components/Modals/OptionsModal";

import theme from "../theme/theme";

const MainScreen = () => {
  const isAdding = useSelector((state) => state.ui.isAdding);
  const allListsIsOpen = useSelector((state) => state.ui.allListsIsOpen);
  const optionsIsOpen = useSelector((state) => state.ui.optionsIsOpen);

  return (
    <SafeAreaView style={styles.screen}>
      <Dashboard />
      <TasksContainer />
      <ControlsContainer />
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
  },
});
