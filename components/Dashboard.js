import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/core";

import moment from "moment";

import CustomText from "./UI/CustomText";
import CustomButton from "./UI/CustomButton";

import theme from "../theme/theme";

const Dashboard = () => {
  const navigation = useNavigation();

  const addNewListHandler = () => {
    navigation.navigate("AddListScreen");
  };

  return (
    <View style={styles.dashboardContainer}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <View style={styles.dateBox}>
        <CustomText light size={25}>
          {moment().format("dddd")}
        </CustomText>
        <CustomText regular>{moment().format("MMMM Do YYYY")}</CustomText>
      </View>
      <View style={styles.listButtonContainer}>
        <CustomButton title="My tasks" />
        <CustomButton title="Add list" onPress={addNewListHandler} />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 2.5,
    justifyContent: "space-between",
    borderBottomColor: theme.primaryLight,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  logo: {
    resizeMode: "contain",
    height: "30%",
    width: 140,
    alignSelf: "flex-end",
  },
  dateBox: {
    alignSelf: "flex-start",
  },
  listButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
    height: 30,
  },
});
