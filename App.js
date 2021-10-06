import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";

import WelcomeScreen from "./screens/WelcomeScreen";
import MainScreen from "./screens/MainScreen";
import AddListScreen from "./screens/AddListScreen";

import store from "./store/store";

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
    <Provider store={store}>
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
            <Stack.Screen
              name="AddListScreen"
              component={AddListScreen}
              options={{
                headerTitle: "Create new list",
                headerTitleStyle: {
                  fontFamily: "customLight",
                  color: "white",
                },
                headerStyle: {
                  backgroundColor: theme.primaryLight,
                },
                headerTintColor: "white",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  backscreen: {
    flex: 1,
    backgroundColor: theme.primary,
  },
});
