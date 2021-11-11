import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { toggleIsAdding, toggleIsAddingDetails } from "../store/uiSlice";

import CustomText from "./UI/CustomText";

import theme from "../theme/theme";

const ModalControlsContainer = (props) => {
  const dispatch = useDispatch();

  const cancelAddTaskHandler = () => {
    dispatch(toggleIsAdding(false));
    dispatch(toggleIsAddingDetails(false));
  };

  const isAddingDetails = () => {
    dispatch(toggleIsAddingDetails(true));
  };

  const buttonStyles = (pressed) => {
    let updatedStyles = [styles.button];

    if (pressed) {
      updatedStyles.push({ backgroundColor: "#353535" });
    }

    return updatedStyles;
  };

  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={isAddingDetails}>
        <MaterialIcons name="arrow-drop-down" size={24} color="white" />
      </Pressable>
      <View style={styles.buttonsBox}>
        <Pressable
          onPress={cancelAddTaskHandler}
          style={({ pressed }) => buttonStyles(pressed)}
        >
          <CustomText color="white" size={18}>
            Cancel
          </CustomText>
        </Pressable>
        <Pressable
          onPress={props.addTaskOnPress}
          style={({ pressed }) => buttonStyles(pressed)}
        >
          <CustomText color={theme.secondary} size={18}>
            Save
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};

export default ModalControlsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonsBox: {
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-between",
  },
  button: {
    padding: 2,
    borderRadius: 5,
  },
});
