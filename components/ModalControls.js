import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

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
      <TouchableOpacity onPress={isAddingDetails}>
        <MaterialIcons name="arrow-drop-down" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.buttonsBox}>
        <TouchableOpacity onPress={cancelAddTaskHandler} style={styles.button}>
          <CustomText color="white" size={18}>
            Cancel
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onAddTaskOnPress}
          style={styles.button}
        >
          <CustomText color={theme.secondary} size={18}>
            Save
          </CustomText>
        </TouchableOpacity>
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
