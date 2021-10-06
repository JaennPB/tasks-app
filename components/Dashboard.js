import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/core";

import { useSelector, useDispatch } from "react-redux";
import { switchList } from "../store/tasksSlice";

import moment from "moment";

import CustomText from "./UI/CustomText";
import CustomButton from "./UI/CustomButton";
import theme from "../theme/theme";

const Dashboard = () => {
  const lists = useSelector((state) => state.tasks.lists);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addNewListHandler = () => {
    navigation.navigate("AddListScreen");
  };

  const openListHandler = (list) => {
    dispatch(switchList(list));
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {lists.map((list) => (
            <CustomButton
              title={list.name}
              key={list.name}
              onPress={() => openListHandler(list.name)}
            />
          ))}
          <CustomButton title="Add list" notAList onPress={addNewListHandler} />
        </ScrollView>
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
  },
  logo: {
    resizeMode: "contain",
    height: "30%",
    width: 140,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  dateBox: {
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  listButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
    height: 30,
    paddingHorizontal: 10,
  },
});
