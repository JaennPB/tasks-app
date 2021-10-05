import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import MainScreen from "./screens/MainScreen";

import theme from "./theme/theme";

const App = () => {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    customLight: require("./assets/fonts/Montserrat-Light.ttf"),
    customRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    customBold: require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <View style={styles.backscreen}>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  backscreen: {
    flex: 1,
    backgroundColor: theme.primary,
  },
});