import React, { useState, useLayoutEffect, useRef } from "react";
import { StyleSheet, TextInput, Pressable } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { toggleIsAdding } from "../../store/tasksSlice";

import CustomModal from "../UI/CustomModal";
import ModalControlsContainer from "../ModalControlsContainer";

import theme from "../../theme/theme";

const AddNewTaskModal = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();
  const [details, setDetails] = useState();
  const isAddingDetails = useSelector((state) => state.tasks.isAddingDetails);

  const inputRef = useRef(null);

  useLayoutEffect(() => {
    Platform.OS === "ios"
      ? inputRef.current.focus()
      : setTimeout(() => inputRef.current.focus(), 200);
  }, []);

  const closeModal = () => {
    dispatch(toggleIsAdding(false));
  };

  return (
    <CustomModal>
      <Pressable onPress={closeModal} style={styles.backdrop}></Pressable>
      <TextInput
        style={styles.input}
        placeholder="Enter new task"
        placeholderTextColor="grey"
        autoCapitalize="sentences"
        onChangeText={setTask}
        value={task}
        ref={inputRef}
      />
      {isAddingDetails && (
        <TextInput
          style={styles.input2}
          placeholder="Enter details"
          placeholderTextColor="grey"
          autoCapitalize="sentences"
          onChangeText={setDetails}
          value={details}
        />
      )}
      <ModalControlsContainer />
    </CustomModal>
  );
};

export default AddNewTaskModal;

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "customRegular",
    fontSize: 18,
    color: "white",
  },
  input2: {
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "customRegular",
    fontSize: 15,
    color: "grey",
  },
  backdrop: {
    height: "100%",
  },
});
