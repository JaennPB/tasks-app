import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TextInput } from "react-native";

import CustomText from "./UI/CustomText";

import theme from "../theme/theme";

const AddNewTaskModal = () => {
  const [task, setTask] = useState();

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
        />
      </View>
    </Modal>
  );
};

export default AddNewTaskModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  input: {
    marginTop: 10,
    borderTopWidth: 2,
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "customRegular",
    fontSize: 18,
    color: "white",
  },
});
