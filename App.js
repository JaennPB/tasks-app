import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import MainScreen from "./screens/MainScreen";
import AddListScreen from "./screens/AddListScreen";
import TaskOptionsScreen from "./screens/TaskOptionsScreen";

import store from "./store/store";

import theme from "./theme/theme";

const App = () => {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    customLight: require("./assets/fonts/Montserrat-Light.ttf"),
    customRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    customBold: require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  return (
    <Provider store={store}>
      {!fontsLoaded ? (
        <AppLoading />
      ) : (
        <View style={styles.backscreen}>
          <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddListScreen"
                component={AddListScreen}
                options={{
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
              <Stack.Screen
                name="TaskOptionsScreen"
                component={TaskOptionsScreen}
                options={{
                  headerStyle: {
                    backgroundColor: theme.primaryLight,
                  },
                  headerTintColor: "white",
                  headerTitle: "",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      )}
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
