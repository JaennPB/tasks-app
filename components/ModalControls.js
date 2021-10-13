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

  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={isAddingDetails}>
        <MaterialIcons name="arrow-drop-down" size={24} color="white" />
      </Pressable>
      <View style={styles.buttonsBox}>
        <Pressable onPress={cancelAddTaskHandler}>
          <CustomText color="white" size={18}>
            Cancel
          </CustomText>
        </Pressable>
        <Pressable onPress={props.addTaskOnPress}>
          <CustomText color={theme.accent} size={18}>
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
});
