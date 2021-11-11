import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { toggleAllListsModal, toggleOptionsModal } from "../store/uiSlice";

import AddTaskButton from "./UI/AddTaskButton";

import theme from "../theme/theme";

const ControlsContainer = () => {
  const dispatch = useDispatch();

  const openAllListsModalHandler = () => {
    dispatch(toggleAllListsModal(true));
  };

  const openOptionsModalHandler = () => {
    dispatch(toggleOptionsModal(true));
  };

  return (
    <View style={styles.controlsContainer}>
      <AddTaskButton />
      <View style={styles.controlsBox}>
        <Pressable style={styles.button1} onPress={openAllListsModalHandler}>
          <Ionicons name="menu-outline" size={30} color="white" />
        </Pressable>
        <Pressable style={styles.button2} onPress={openOptionsModalHandler}>
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default ControlsContainer;

const styles = StyleSheet.create({
  controlsContainer: {
    flex: 1.2,
    justifyContent: "flex-end",
  },
  controlsBox: {
    flex: 0.7,
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
  },
  button2: {
    width: 30,
    alignItems: "flex-end",
  },
});
