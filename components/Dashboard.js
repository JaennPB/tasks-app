import React from "react";
import { StyleSheet, View, Image, Pressable, Button } from "react-native";

import moment from "moment";

import CustomText from "./UI/CustomText";
import CustomButton from "./UI/CustomButton";

const Dashboard = () => {
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
        <CustomButton title="+ New list" />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 2,
    justifyContent: "space-between",
    // borderColor: "white",
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
    alignSelf: "flex-start",
  },
  listButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
    height: 30,
  },
});
