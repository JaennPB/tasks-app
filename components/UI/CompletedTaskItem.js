import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

import { Feather } from "@expo/vector-icons";

import CustomText from "./CustomText";

const CompletedTaskItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable>
        <Feather name="check-circle" size={17} color="grey" />
      </Pressable>
      <Pressable style={styles.taskItem}>
        <CustomText size={16} style={styles.text}>
          {props.title}
        </CustomText>
        {props.details === undefined ? null : (
          <CustomText size={13} color="grey">
            {props.details}
          </CustomText>
        )}
      </Pressable>
    </View>
  );
};

export default CompletedTaskItem;

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
  text: {
    textDecorationLine: "line-through",
    color: "grey",
  },
});
