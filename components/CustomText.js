import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomText = (props) => {
  const textStyles = () => {
    let updatedStyles = [styles.text];

    if (props.light) {
      updatedStyles.push({ fontFamily: "customLight" });
    }

    return updatedStyles;
  };

  return <Text style={() => textStyles()}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default CustomText;
