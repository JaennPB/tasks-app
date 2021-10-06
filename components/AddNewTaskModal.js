import React, { useState, useLayoutEffect, useRef } from "react";
import { StyleSheet, View, Modal, TextInput } from "react-native";

import { useSelector } from "react-redux";

import ModalControlsContainer from "./ModalControlsContainer";

import theme from "../theme/theme";

const AddNewTaskModal = () => {
  const [task, setTask] = useState();
  const [details, setDetails] = useState();
  const isAddingDetails = useSelector((state) => state.tasks.isAddingDetails);

  const inputRef = useRef(null);

  useLayoutEffect(() => {
    Platform.OS === "ios"
      ? inputRef.current.focus()
      : setTimeout(() => inputRef.current.focus(), 200);
  }, []);

  return (
    <Modal transparent animationType="fade">
      <View style={styles.modal}>
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
      </View>
    </Modal>
  );
};

export default AddNewTaskModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000080",
  },
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
});
