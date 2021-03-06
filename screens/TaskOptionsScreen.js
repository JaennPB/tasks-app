import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import {
  completeTask,
  removeTask,
  addDetailsToCurrentTask,
} from "../store/tasksSlice";

import CustomText from "../components/UI/CustomText";

import theme from "../theme/theme";

const TaskOptionsScreen = (props) => {
  const navigation = useNavigation();
  const currentList = useSelector((state) => state.tasks.currentList);
  const { taskTitle, taskDetails } = props.route.params;
  const dispatch = useDispatch();
  const [details, setDetails] = useState();

  const deleteTaskHandler = () => {
    dispatch(removeTask(taskTitle));
    navigation.goBack();
  };

  const completeTaskHandler = () => {
    dispatch(completeTask({ title: taskTitle, details: taskDetails }));
    navigation.goBack();
  };

  const addDetailsHandler = () => {
    dispatch(
      addDetailsToCurrentTask({ details: details, taskTitle: taskTitle })
    );
  };

  useEffect(() => {
    const listener = navigation.addListener("beforeRemove", () => {
      if (details) {
        addDetailsHandler();
      }
    });
    return listener;
  }, [navigation, details]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={deleteTaskHandler}>
            <MaterialIcons name="delete" size={25} color={theme.secondary} />
          </Pressable>
        );
      },
    });
  });

  return (
    <SafeAreaView style={styles.screen}>
      <CustomText size={16}>{currentList}</CustomText>
      <View style={styles.taskContainer}>
        <Pressable onPress={completeTaskHandler}>
          <Feather name="circle" size={17} color="grey" />
        </Pressable>
        <CustomText size={18} style={styles.text}>
          {taskTitle}
        </CustomText>
      </View>
      <View style={styles.detailsContainer}>
        <MaterialIcons name="playlist-add" size={30} color="white" />
        {taskDetails ? (
          <CustomText style={styles.text}>{taskDetails}</CustomText>
        ) : (
          <TextInput
            placeholder="Add details"
            placeholderTextColor="grey"
            autoCapitalize="sentences"
            style={{ marginLeft: 10, color: "white" }}
            onChangeText={setDetails}
            value={details}
          />
        )}
      </View>
      <View style={styles.dateContainer}>
        <AntDesign name="calendar" size={30} color="white" />
        <CustomText style={styles.text} color="grey">
          Add date/time
        </CustomText>
      </View>
    </SafeAreaView>
  );
};

export default TaskOptionsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.primary,
    padding: 20,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
  },
});
