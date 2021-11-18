import React from "react";
import { StyleSheet, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import CustomText from "./CustomText";

const NoTasksOrLists = (props) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="tasks" size={40} color="grey" />
      <CustomText size={18} color="grey" style={styles.text}>
        {props.msg}
      </CustomText>
    </View>
  );
};

export default NoTasksOrLists;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
  },
});
