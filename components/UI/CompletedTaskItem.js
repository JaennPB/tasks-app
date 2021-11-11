import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import * as Haptics from "expo-haptics";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { removeTask } from "../../store/tasksSlice";

import theme from "../../theme/theme";

import CustomText from "./CustomText";

const CompletedTaskItem = (props) => {
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

  return (
    <View style={styles.itemContainer}>
      <View style={styles.taskContainer}>
        <Feather name="check-circle" size={18} color="grey" />
        <TouchableOpacity
          style={styles.taskItem}
          onLongPress={showDeleteTaskIconHandler}
        >
          <CustomText size={18} style={styles.text}>
            {props.title}
          </CustomText>
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

export default CompletedTaskItem;

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
  text: {
    textDecorationLine: "line-through",
    color: "grey",
  },
});
