import React from "react";
import { StyleSheet, Pressable, View } from "react-native";

import CustomText from "./CustomText";

import theme from "../../theme/theme";

const CustomButton = (props) => {
  const buttonStyles = (pressed) => {
    let updatedStyles = [styles.listButton];

    if (pressed) {
      updatedStyles.push({ backgroundColor: theme.primaryLight });
    }

    return updatedStyles;
  };

  return (
    <Pressable {...props} style={({ pressed }) => buttonStyles(pressed)}>
      <CustomText light>{props.title}</CustomText>
      <View style={styles.accent}></View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  listButton: {
    paddingHorizontal: 10,
    paddingTop: 4,
    marginRight: 15,
    borderRadius: 500,
    justifyContent: "center",
    backgroundColor: theme.primary,
    justifyContent: "space-between",
  },
  accent: {
    backgroundColor: theme.secondary,
    height: 4,
    width: "100%",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});
