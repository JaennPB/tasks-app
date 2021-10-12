import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { completeTask } from "../../store/tasksSlice";

import CustomText from "./CustomText";

const TaskItem = (props) => {
  const dispatch = useDispatch();

  const completeTaskHandler = () => {
    dispatch(completeTask(props.children));
  };

  const openTaskHandler = () => {
    console.log("hi");
  };

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={completeTaskHandler}>
        <Feather name="circle" size={17} color="grey" />
      </Pressable>
      <Pressable onPress={openTaskHandler} style={styles.taskItem}>
        <CustomText size={16}>{props.title}</CustomText>
        {props.details === undefined ? null : (
          <CustomText size={13} color="grey">
            {props.details}
          </CustomText>
        )}
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  taskItem: {
    width: "80%",
    marginLeft: 10,
  },
});
