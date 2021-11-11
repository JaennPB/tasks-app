import React from "react";
import { StyleSheet, Pressable } from "react-native";

import { Feather } from "@expo/vector-icons";

import { toggleIsAdding } from "../../store/uiSlice";
import { useDispatch } from "react-redux";

import theme from "../../theme/theme";

const AddTaskButton = () => {
  const dispatch = useDispatch();

  const addNewTaskHandler = () => {
    dispatch(toggleIsAdding(true));
  };

  return (
    <Pressable style={styles.buttonContainer} onPress={addNewTaskHandler}>
      <Feather name="plus" size={40} color="white" />
    </Pressable>
  );
};

export default AddTaskButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    top: -10,
    zIndex: 100,
    alignSelf: "center",
    borderRadius: 500,
    borderColor: theme.primary,
    backgroundColor: theme.secondary,
    borderWidth: 8,
  },
});
