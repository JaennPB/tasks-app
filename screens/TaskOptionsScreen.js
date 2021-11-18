import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import CustomText from "../components/UI/CustomText";

import {
  completeTask,
  removeTask,
  addDetailsToCurrentTask,
} from "../store/tasksSlice";

import theme from "../theme/theme";

const TaskOptionsScreen = (props) => {
  const navigation = useNavigation();
  const currentList = useSelector((state) => state.tasks.currentList);
  const { taskTitle, taskDetails } = props.route.params;
  const dispatch = useDispatch();
  const [details, setDetails] = React.useState();

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

  React.useEffect(() => {
    const listener = navigation.addListener("beforeRemove", () => {
      if (details) {
        addDetailsHandler();
      }
    });
    return listener;
  }, [navigation, details]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={deleteTaskHandler}>
            <MaterialIcons name="delete" size={25} color={theme.secondary} />
          </TouchableOpacity>
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
  text: {
    marginLeft: 10,
  },
});
