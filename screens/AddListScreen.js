import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  Pressable,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import CustomText from "../components/UI/CustomText";

import { useDispatch, useSelector } from "react-redux";
import {
  addList,
  toggleIsEditingTitle,
  editListName,
} from "../store/tasksSlice";

import theme from "../theme/theme";

const AddListScreen = (props) => {
  const [title, setTitle] = useState();
  const [editingTitle, setEditingTitle] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const inputRef = useRef(null);
  const lists = useSelector((state) => state.tasks.lists);
  const { from } = props.route.params;

  let isEditing;
  let currListTitle;

  if (from === "optionsRoute") {
    dispatch(toggleIsEditingTitle(true));
    isEditing = useSelector((state) => state.tasks.isEditingTitle);

    currListTitle = useSelector((state) => state.tasks.currentList);
  }

  const addListHandler = () => {
    if (title === undefined || title.trim(" ") === "") {
      Alert.alert("Error", "Please add a valid title name");
      return;
    }
    if (lists.find((list) => list.name === title)) {
      Alert.alert("List name already exists", "Please add a different name.");
      return;
    }
    dispatch(addList(title));
    navigation.goBack();
  };

  const editListTitleHandler = () => {
    console.log("Editing");
    dispatch(editListName(editingTitle));
    navigation.goBack();
    // merge with addListHandler
  };

  useLayoutEffect(() => {
    Platform.OS === "ios"
      ? inputRef.current.focus()
      : setTimeout(() => inputRef.current.focus(), 70);

    if (from === "optionsRoute") {
      navigation.setOptions({ title: props.route.params.title });
    }
    if (from === "newListRoute") {
      navigation.setOptions({ title: props.route.params.title });
    }

    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={isEditing ? editListTitleHandler : addListHandler}
          >
            <CustomText regular size={18} color={theme.accent}>
              {isEditing ? "Rename" : "Add"}
            </CustomText>
          </Pressable>
        );
      },
    });
  });

  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        style={styles.input}
        placeholder={isEditing ? currListTitle : "Enter list name"}
        placeholderTextColor="grey"
        ref={inputRef}
        autoCapitalize="sentences"
        onChangeText={isEditing ? setEditingTitle : setTitle}
        value={isEditing ? editingTitle : title}
      />
    </SafeAreaView>
  );
};

export default AddListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.primary,
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "customRegular",
    fontSize: 18,
    color: "white",
  },
});
