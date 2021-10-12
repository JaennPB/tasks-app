import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { useSelector } from "react-redux";

import CustomText from "./UI/CustomText";
import TaskItem from "./UI/TaskItem";
import CompletedTaskItem from "./UI/CompletedTaskItem";

import theme from "../theme/theme";
import NoTasksOrLists from "./UI/NoTasksOrLists";

const TasksContainer = () => {
  const allLists = useSelector((state) => state.tasks.lists);
  const currentList = useSelector((state) => state.tasks.currentList);
  const currentListObject = allLists.find((list) => list.name === currentList);

  if (currentListObject) {
    return (
      <View style={styles.tasksContainer}>
        <ScrollView style={styles.tasksScroll}>
          {currentListObject?.uncompleted.length === 0 && (
            <NoTasksOrLists msg="Add some tasks" />
          )}
          {currentListObject?.uncompleted.length >= 1 &&
            currentListObject.uncompleted.map((task, index) => (
              <TaskItem
                key={task + index}
                title={task.title}
                details={task.details}
              />
            ))}
        </ScrollView>
        <ScrollView style={styles.completedScroll}>
          {currentListObject?.completed.length >= 1 && (
            <View style={styles.completedContainer}>
              <CustomText color="grey" style={{ alignSelf: "flex-end" }}>
                Completed tasks
              </CustomText>
              {currentListObject.completed.map((task, index) => (
                <CompletedTaskItem key={task + index}>{task}</CompletedTaskItem>
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.tasksContainer}>
        {allLists.length === 0 && <NoTasksOrLists msg="Add a list" />}
      </View>
    );
  }
};

export default TasksContainer;

const styles = StyleSheet.create({
  tasksContainer: {
    flex: 8,
    padding: 20,
  },
  completedContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: theme.primaryLight,
    paddingTop: 10,
  },
  tasksScroll: {
    backgroundColor: "red",
  },
  completedScroll: {
    backgroundColor: "blue",
  },
});
