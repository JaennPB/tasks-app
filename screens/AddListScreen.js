import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import CustomText from "../components/UI/CustomText";

import theme from "../theme/theme";

const AddListScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <CustomText>Hello</CustomText>
    </SafeAreaView>
  );
};

export default AddListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.primary,
  },
});
