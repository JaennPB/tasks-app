import React from "react";
import { StyleSheet, View } from "react-native";

import { useSelector } from "react-redux";

import CustomText from "./UI/CustomText";
import TaskItem from "./UI/TaskItem";
import CompletedTaskItem from "./UI/CompletedTaskItem";

const TasksContainer = () => {
  const allLists = useSelector((state) => state.tasks.lists);
  const currentList = useSelector((state) => state.tasks.currentList);
  const currentListObject = allLists.find((list) => list.name === currentList);

  let noTasksInList;
  if (allLists.length === 0) {
    noListsInState = true;
  }

  if (currentListObject) {
    let noListsInState;
    let tasksCompleted;
    if (currentListObject.uncompleted.length === 0) {
      noTasksInList = true;
    }
    if (currentListObject.completed.length >= 1) {
      tasksCompleted = true;
    }

    return (
      <View style={styles.tasksContainer}>
        {!noListsInState &&
          currentListObject.uncompleted.map((task) => (
            <TaskItem key={task}>{task}</TaskItem>
          ))}
        {tasksCompleted &&
          currentListObject.completed.map((task) => (
            <CompletedTaskItem key={Math.random().toString()}>
              {task}
            </CompletedTaskItem>
          ))}
        {noListsInState && <CustomText>Add a list!</CustomText>}
        {noTasksInList && <CustomText>Add some tasks!</CustomText>}
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
});
