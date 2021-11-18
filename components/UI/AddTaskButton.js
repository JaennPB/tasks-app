import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";

import { Feather } from "@expo/vector-icons";

import { toggleIsAdding } from "../../store/uiSlice";

import theme from "../../theme/theme";

const AddTaskButton = () => {
  const dispatch = useDispatch();

  const addNewTaskHandler = () => {
    dispatch(toggleIsAdding(true));
  };

  const buttonStyles = (pressed) => {
    let updatedStyles = [styles.buttonContainer];

    if (pressed) {
      updatedStyles.push({ backgroundColor: "#8bb1ff" });
    }

    return updatedStyles;
  };

  return (
    <Pressable
      style={({ pressed }) => buttonStyles(pressed)}
      onPress={addNewTaskHandler}
    >
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
