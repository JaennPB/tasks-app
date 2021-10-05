import React from "react";
import { StyleSheet, Pressable } from "react-native";

import CustomText from "./CustomText";

import theme from "../../theme/theme";

const CustomButton = (props) => {
  const buttonStyles = (pressed) => {
    let updatedStyles = [styles.listButton];

    if (pressed) {
      updatedStyles.push({ opacity: 0.5 });
    }

    return updatedStyles;
  };

  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => buttonStyles(pressed)}
    >
      <CustomText light>{props.title}</CustomText>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  listButton: {
    paddingHorizontal: 15,
    marginRight: 15,
    justifyContent: "center",
    backgroundColor: theme.primary,
    // borderBottomColor: theme.secondary,
    // borderBottomWidth: 2,
  },
});
