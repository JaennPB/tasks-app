import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import moment from "moment";

import CustomText from "./UI/CustomText";
import CustomButton from "./UI/CustomButton";

import { switchList } from "../store/tasksSlice";

import theme from "../theme/theme";

const Dashboard = () => {
  const lists = useSelector((state) => state.tasks.lists);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addNewListHandler = () => {
    navigation.navigate("AddListScreen", {
      title: "Create new list",
      from: "newListRoute",
    });
  };

  const openListHandler = (list) => {
    dispatch(switchList(list));
  };

  return (
    <View style={styles.dashboardContainer}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
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
          <CustomButton
            title="+ New list"
            notAList
            onPress={addNewListHandler}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardContainer: {
    paddingTop: 5,
    flex: 3,
    justifyContent: "space-between",
    borderBottomColor: theme.primaryLight,
    borderBottomWidth: 2,
  },
  logo: {
    resizeMode: "contain",
    height: "33%",
    width: 150,
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
