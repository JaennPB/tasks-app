import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/core";

import { useDispatch } from "react-redux";
import { deleteList } from "../../store/tasksSlice";
import { toggleOptionsModal } from "../../store/uiSlice";

import CustomModal from "../UI/CustomModal";
import CustomText from "../UI/CustomText";

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

  return (
    <CustomModal>
      <Pressable onPress={closeModal} style={styles.backdrop}></Pressable>
      <View style={styles.modalContainer}>
        <Pressable style={styles.button} onPress={addNewListHandler}>
          <CustomText>Rename list</CustomText>
        </Pressable>
        <Pressable style={styles.button} onPress={deleteListHandler}>
          <CustomText>Delete list</CustomText>
        </Pressable>
        <Pressable style={styles.button}>
          <CustomText>Delete all completed tasks</CustomText>
        </Pressable>
      </View>
    </CustomModal>
  );
};

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
