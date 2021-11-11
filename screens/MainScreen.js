import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { useSelector } from "react-redux";

import Dashboard from "../components/Dashboard";
import BottomControls from "../components/BottomControls";
import TasksContainer from "../components/TasksContainer";
import AddNewTaskModal from "../components/Modals/AddNewTaskModal";
import AllListsModal from "../components/Modals/AllListsModal";
import OptionsModal from "../components/Modals/OptionsModal";

import AsyncStorage from "@react-native-async-storage/async-storage";

import theme from "../theme/theme";

const MainScreen = () => {
  const isAdding = useSelector((state) => state.ui.isAdding);
  const allListsIsOpen = useSelector((state) => state.ui.allListsIsOpen);
  const optionsIsOpen = useSelector((state) => state.ui.optionsIsOpen);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, [navigation]);

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
  },
});
