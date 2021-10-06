import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

import Dashboard from "../components/Dashboard";
import ControlsContainer from "../components/ControlsContainer";
import TasksContainer from "../components/TasksContainer";
import AddNewTaskModal from "../components/AddNewTaskModal";

import { useSelector } from "react-redux";

import theme from "../theme/theme";

const MainScreen = () => {
  const isAdding = useSelector((state) => state.tasks.isAdding);

  return (
    <SafeAreaView style={styles.screen}>
      <Dashboard />
      <TasksContainer />
      <ControlsContainer />
      {isAdding && <AddNewTaskModal />}
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
