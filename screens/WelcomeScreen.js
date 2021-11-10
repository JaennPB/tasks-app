import React, { useEffect } from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";

import { useNavigation } from "@react-navigation/core";

import theme from "../theme/theme";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MainScreen");
    }, 1500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "50%",
  },
});
