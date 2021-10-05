import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/core";

import theme from "../theme/theme";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MainScreen");
    }, 2500);
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
    </View>
  );
};

// FIXME: CHECK LOGO QUALITY

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
