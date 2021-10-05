import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
} from "react-native";

import moment from "moment";

import theme from "../theme/theme";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.dashboardContainer}>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
        <View style={styles.dateBox}>
          <Text style={styles.day}>{moment().format("dddd")}</Text>
          <Text style={styles.date}>{moment().format("MMMM Do YYYY")}</Text>
        </View>
        <View style={styles.listButtonContainer}>
          <Pressable style={styles.listButton}>
            <Text>My tasks</Text>
          </Pressable>
          <Pressable style={styles.listButton}>
            <Text>+ New list</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.tasksContainer}></View>
      <View style={styles.buttonsContainer}></View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.primary,
  },
  dashboardContainer: {
    flex: 2,
    justifyContent: "space-between",
    // borderColor: 'white',
    // borderWidth: 1,
    paddingHorizontal: 20,
  },
  logo: {
    resizeMode: "contain",
    height: "30%",
    width: 140,
    alignSelf: "flex-end",
  },
  dateBox: {
    color: "white",
  },
  day: {
    color: "white",
    fontFamily: "customLight", // TODO: fix this
    fontSize: 25,
    alignSelf: "flex-start",
  },
  date: {
    color: "white",
    alignSelf: "flex-start",
  },
  listButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
    height: 30,
  },
  listButton: {
    paddingHorizontal: 15,
    marginRight: 15,
    justifyContent: "center",
  },
  tasksContainer: {
    flex: 8,
    // borderColor: 'white',
    // borderWidth: 1,
  },
  buttonsContainer: {
    flex: 1,
    // borderColor: 'white',
    // borderWidth: 1,
  },
});
