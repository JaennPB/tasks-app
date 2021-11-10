import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomText = (props) => {
  let updatedStyles = [styles.text];

  updatedStyles.push(props.style);

  if (props.light) {
    updatedStyles.push({ fontFamily: "customLight" });
  }
  if (props.regular) {
    updatedStyles.push({ fontFamily: "customRegular" });
  }
  if (props.bold) {
    updatedStyles.push({ fontFamily: "customBold" });
  }
  if (props.size) {
    updatedStyles.push({ fontSize: props.size });
  }
  if (props.color) {
    updatedStyles.push({ color: props.color });
  }

  return <Text style={updatedStyles}>{props.children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
