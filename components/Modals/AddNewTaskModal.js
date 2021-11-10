import React, { useState, useLayoutEffect, useRef } from "react";
import { StyleSheet, TextInput, Pressable, Alert, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../store/tasksSlice";
import { toggleIsAdding, toggleIsAddingDetails } from "../../store/uiSlice";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import CustomModal from "../UI/CustomModal";
import ModalControls from "../ModalControls";

import theme from "../../theme/theme";
import CustomText from "../UI/CustomText";

const AddNewTaskModal = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();
  const [details, setDetails] = useState();

  const isAddingDetails = useSelector((state) => state.ui.isAddingDetails);
  const allLists = useSelector((state) => state.tasks.lists);
  const currentList = useSelector((state) => state.tasks.currentList);
  const currentListObject = allLists.find((list) => list.name === currentList);

  const inputRef = useRef(null);

  useLayoutEffect(() => {
    Platform.OS === "ios"
      ? inputRef.current.focus()
      : setTimeout(() => inputRef.current.focus(), 200);
  }, []);

  const closeModal = () => {
    dispatch(toggleIsAdding(false));
  };

  const addNewTaskHandler = () => {
    if (currentListObject.uncompleted.includes(task)) {
      Alert.alert("Task already exists", "Please add a different task!");
      return;
    } else if (!task) {
      Alert.alert("Empty", "Please type something.");
      return;
    } else {
      closeModal();
      dispatch(addTask({ title: task, details: details }));
      dispatch(toggleIsAddingDetails(false));
    }
  };

  return (
    <CustomModal>
      <Pressable onPress={closeModal} style={styles.backdrop}></Pressable>
      <TextInput
        style={styles.taskInput}
        placeholder="Enter new task"
        placeholderTextColor="grey"
        autoCapitalize="sentences"
        onChangeText={setTask}
        value={task}
        ref={inputRef}
      />
      {isAddingDetails && (
        <>
          <View style={styles.detailsContainer}>
            <MaterialIcons name="playlist-add" size={25} color="white" />
            <TextInput
              style={styles.detailsInput}
              placeholder="Enter details"
              placeholderTextColor="grey"
              autoCapitalize="sentences"
              onChangeText={setDetails}
              value={details}
            />
          </View>
          <View style={styles.dateContainer}>
            <AntDesign name="calendar" size={25} color="white" />
            <Pressable style={styles.dateButton}>
              <CustomText color="grey">Add time/date</CustomText>
            </Pressable>
          </View>
        </>
      )}
      <ModalControls addTaskOnPress={addNewTaskHandler} />
    </CustomModal>
  );
};

export default AddNewTaskModal;

const styles = StyleSheet.create({
  taskInput: {
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "customRegular",
    fontSize: 18,
    color: "white",
  },
  detailsInput: {
    fontFamily: "customRegular",
    color: "grey",
    marginLeft: 10,
    width: "100%",
  },
  backdrop: {
    height: "100%",
  },
  detailsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: theme.primaryLight,
  },
  dateContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.primaryLight,
  },
  dateButton: {
    marginLeft: 10,
  },
});
