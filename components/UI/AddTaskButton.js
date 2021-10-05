import React from "react";
import { StyleSheet, Pressable } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Feather } from "@expo/vector-icons";

import theme from "../../theme/theme";

const AddTaskButton = () => {
  return (
    <Pressable style={styles.buttonContainer} onPress={() => {}}>
      <LinearGradient
        colors={[theme.secondary, theme.accent]}
        style={styles.gradient}
      >
        <Feather name="plus" size={40} color="white" />
      </LinearGradient>
    </Pressable>
  );
};

export default AddTaskButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "relative",
    top: -30,
    borderRadius: 500,
    borderColor: theme.primary,
    borderWidth: 8,
  },
  gradient: {
    borderRadius: 500,
    padding: 5,
  },
});
