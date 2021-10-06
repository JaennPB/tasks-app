import React from "react";
import { StyleSheet, Pressable, View } from "react-native";

import CustomText from "./CustomText";

import { useSelector } from "react-redux";

import theme from "../../theme/theme";

const CustomButton = (props) => {
  const currentList = useSelector((state) => state.tasks.currentList);
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
      {!props.notAList && currentList === props.title ? (
        <View style={styles.accent}></View>
      ) : null}
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
