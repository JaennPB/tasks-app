import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

import { useDispatch } from "react-redux";
import { toggleAllListsModal } from "../../store/tasksSlice";

import CustomModal from "../UI/CustomModal";
import CustomText from "../UI/CustomText";

import theme from "../../theme/theme";

const AllListsModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleAllListsModal(false));
  };

  return (
    <CustomModal>
      <Pressable onPress={closeModal} style={styles.backdrop}></Pressable>
      <View style={styles.modalContainer}>
        <View style={styles.addListButtonContainer}>
          <Pressable onPress={() => {}}>
            <CustomText color="white" style={{ marginLeft: 20 }}>
              + Create New List
            </CustomText>
          </Pressable>
        </View>
      </View>
    </CustomModal>
  );
};

export default AllListsModal;

const styles = StyleSheet.create({
  modalContainer: {
    // padding: 20,
    paddingVertical: 20,
    backgroundColor: theme.primaryLight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  addListButtonContainer: {
    borderTopColor: theme.primary,
    width: "100%",
    borderTopWidth: 1,
    paddingTop: 20,
    alignItems: "flex-start",
  },
  backdrop: {
    height: "100%",
  },
});
