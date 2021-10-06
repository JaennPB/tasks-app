import React from "react";
import { StyleSheet, Pressable, View } from "react-native";

import CustomText from "./CustomText";

import { useSelector } from "react-redux";

import theme from "../../theme/theme";

const CustomButton = (props) => {
  const currentList = useSelector((state) => state.tasks.currentList);

  return (
    <Pressable {...props} style={styles.listButton}>
      <CustomText light size={15}>
        {props.title}
      </CustomText>
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
    marginRight: 15,
    justifyContent: "space-between",
    backgroundColor: theme.primary,
  },
  accent: {
    backgroundColor: theme.secondary,
    alignSelf: "flex-end",
    height: 5,
    width: "100%",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    marginTop: 3,
  },
});
