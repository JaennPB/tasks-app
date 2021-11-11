import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import * as Haptics from "expo-haptics";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/core";

import { useDispatch } from "react-redux";
import { completeTask, removeTask } from "../../store/tasksSlice";

import CustomText from "./CustomText";

import theme from "../../theme/theme";

const TaskItem = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const showDeleteTaskIconHandler = () => {
    setIsDeleting(!isDeleting);
    Haptics.selectionAsync();
  };

  const deleteTaskHandler = () => {
    dispatch(removeTask(props.title));
    setIsDeleting(!isDeleting);
  };

  const completeTaskHandler = () => {
    dispatch(completeTask({ title: props.title, details: props.details }));
  };

  const openTaskHandler = () => {
    navigation.navigate("TaskOptionsScreen", {
      taskTitle: props.title,
      taskDetails: props.details,
    });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.taskContainer}>
        <TouchableOpacity onPress={completeTaskHandler}>
          <Feather name="circle" size={18} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openTaskHandler}
          style={styles.taskItem}
          onLongPress={showDeleteTaskIconHandler}
        >
          <CustomText size={18}>{props.title}</CustomText>
          {props.details === undefined ? null : (
            <CustomText size={13} color="grey">
              {props.details}
            </CustomText>
          )}
        </TouchableOpacity>
      </View>
      {isDeleting && (
        <TouchableOpacity onPress={deleteTaskHandler}>
          <MaterialIcons name="delete" size={25} color={theme.secondary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskItem: {
    width: "80%",
    marginLeft: 10,
  },
});
