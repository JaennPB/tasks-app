import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import AddTaskButton from "./UI/AddTaskButton";

import theme from "../theme/theme";

const ControlsContainer = () => {
  return (
    <View style={styles.ControlsContainer}>
      <Pressable style={styles.button1} onPress={() => {}}>
        <Ionicons name="menu-outline" size={30} color="white" />
      </Pressable>
      <AddTaskButton />
      <Pressable style={styles.button2} onPress={() => {}}>
        <Entypo name="dots-three-vertical" size={20} color="white" />
      </Pressable>
    </View>
  );
};

export default ControlsContainer;

const styles = StyleSheet.create({
  ControlsContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: theme.primaryLight,
  },
  button1: {
    width: 30,
    alignItems: "flex-start",
  },
  button2: {
    width: 30,
    alignItems: "flex-end",
  },
});
