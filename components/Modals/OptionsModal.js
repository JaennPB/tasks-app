import React from "react";
import { Pressable, StyleSheet, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import CustomModal from "../UI/CustomModal";
import CustomText from "../UI/CustomText";

import { deleteList, removeAllTasks } from "../../store/tasksSlice";
import { toggleOptionsModal } from "../../store/uiSlice";

import theme from "../../theme/theme";

const OptionsModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const closeModal = () => {
    dispatch(toggleOptionsModal(false));
  };

  const addNewListHandler = () => {
    closeModal();
    navigation.navigate("AddListScreen", {
      title: "Edit list name",
      from: "optionsRoute",
    });
  };

  const deleteListHandler = () => {
    closeModal();
    dispatch(deleteList());
  };

  const deleteAllTasksHandler = () => {
    closeModal();
    dispatch(removeAllTasks());
  };

  return (
    <CustomModal>
      <Pressable onPress={closeModal} style={styles.backdrop}></Pressable>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.button} onPress={addNewListHandler}>
          <CustomText>Rename list</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteListHandler}>
          <CustomText>Delete list</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteAllTasksHandler}>
          <CustomText>Delete all completed tasks</CustomText>
        </TouchableOpacity>
      </View>
    </CustomModal>
  );
};

//TODO: check what happens when 'delete all completed tasks' and no tasks are present
export default OptionsModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.primaryLight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backdrop: {
    height: "100%",
  },
});
