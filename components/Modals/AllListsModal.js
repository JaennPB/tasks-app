import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/core";

import { useDispatch, useSelector } from "react-redux";
import { switchList } from "../../store/tasksSlice";
import { toggleAllListsModal } from "../../store/uiSlice";

import CustomModal from "../UI/CustomModal";
import CustomText from "../UI/CustomText";

import theme from "../../theme/theme";

const AllListsModal = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.tasks.lists);
  const navigation = useNavigation();

  const closeModal = () => {
    dispatch(toggleAllListsModal(false));
  };

  const addNewListHandler = () => {
    closeModal();
    navigation.navigate("AddListScreen", {
      title: "Create new list",
      from: "newListRoute",
    });
  };

  const openListHandler = (list) => {
    closeModal();
    dispatch(switchList(list));
  };

  return (
    <CustomModal>
      <Pressable onPress={closeModal} style={styles.backdrop}></Pressable>
      <View style={styles.modalContainer}>
        {lists.map((list) => (
          <Pressable
            key={list.name}
            style={styles.listItem}
            onPress={() => openListHandler(list.name)}
          >
            <CustomText>{list.name}</CustomText>
          </Pressable>
        ))}
        <View style={styles.addListButtonContainer}>
          <Pressable onPress={addNewListHandler}>
            <CustomText color="white" style={{ marginLeft: 20 }} size={15}>
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
    paddingBottom: 20,
    backgroundColor: theme.primaryLight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  addListButtonContainer: {
    borderTopColor: "grey",
    width: "100%",
    borderTopWidth: 1,
    paddingTop: 20,
    alignItems: "flex-start",
  },
  backdrop: {
    height: "100%",
  },
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
