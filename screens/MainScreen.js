import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import theme from "../theme/theme";
import Dashboard from "../components/Dashboard";
import ButtonsContainer from "../components/ButtonsContainer";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Dashboard />
      <View style={styles.tasksContainer}></View>
      <ButtonsContainer />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.primary,
  },
  tasksContainer: {
    flex: 8,
    // borderColor: "white",
    // borderWidth: 1,
  },
});
