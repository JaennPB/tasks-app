import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Dashboard from "../components/Dashboard";
import ControlsContainer from "../components/ControlsContainer";
import TasksContainer from "../components/TasksContainer";

import theme from "../theme/theme";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Dashboard />
      <TasksContainer />
      <ControlsContainer />
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
