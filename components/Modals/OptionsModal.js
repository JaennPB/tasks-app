import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useDispatch } from "react-redux";
import { toggleOptionsModal } from "../../store/tasksSlice";

import CustomModal from "../UI/CustomModal";
import CustomText from "../UI/CustomText";

import theme from "../../theme/theme";

const OptionsModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleOptionsModal(false));
  };

  return (
    <CustomModal>
      <Pressable onPress={closeModal} style={styles.backdrop}></Pressable>
      <View style={styles.modalContainer}>
        <Pressable style={styles.button}>
          <CustomText>Rename list</CustomText>
        </Pressable>
        <Pressable style={styles.button}>
          <CustomText>Delete list</CustomText>
        </Pressable>
        <Pressable style={styles.button}>
          <CustomText>Delete All completed tasks</CustomText>
        </Pressable>
      </View>
    </CustomModal>
  );
};

export default OptionsModal;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    backgroundColor: theme.primaryLight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  backdrop: {
    height: "100%",
  },
});
