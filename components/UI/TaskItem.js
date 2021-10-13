import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/core";

import { useDispatch } from "react-redux";
import { completeTask } from "../../store/tasksSlice";

import CustomText from "./CustomText";

const TaskItem = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
      <Pressable onPress={completeTaskHandler}>
        <Feather name="circle" size={17} color="grey" />
      </Pressable>
      <Pressable onLongPress={openTaskHandler} style={styles.taskItem}>
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
