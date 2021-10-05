import React from "react";
import { StyleSheet, Text, View } from "react-native";

import theme from "../theme/theme";

const ButtonsContainer = () => {
  return <View style={styles.buttonsContainer}></View>;
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 0.8,
    backgroundColor: theme.secondary,
  },
});
