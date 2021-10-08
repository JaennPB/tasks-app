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
        <CustomText size={16} style={{ marginLeft: 10 }}>
          {props.children}
        </CustomText>
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
  },
});
