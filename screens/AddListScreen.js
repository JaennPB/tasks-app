import React, { useLayoutEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import { useDispatch, useSelector } from "react-redux";
import { addList, editListName } from "../store/tasksSlice";
import { toggleIsEditingTitle } from "../store/uiSlice";

import CustomText from "../components/UI/CustomText";

import theme from "../theme/theme";

const AddListScreen = (props) => {
  const [title, setTitle] = useState();
  const [editingTitle, setEditingTitle] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const lists = useSelector((state) => state.tasks.lists);
  const { from } = props.route.params;
  const inputRef = useRef(null);

  let isEditing;
  let currListTitle;

  if (from === "optionsRoute") {
    dispatch(toggleIsEditingTitle(true));
    isEditing = useSelector((state) => state.ui.isEditingTitle);

    currListTitle = useSelector((state) => state.tasks.currentList);
  }

  const addEditListTitle = () => {
    let value;
    if (isEditing) {
      value = editingTitle;
    } else {
      value = title;
    }

    if (value === undefined || value.trim(" ") === "") {
      Alert.alert("Error", "Please add a valid title name");
      return;
    }
    if (lists.find((list) => list.name === value)) {
      Alert.alert("List name already exists", "Please add a different name.");
      return;
    }

    if (isEditing) {
      dispatch(editListName(editingTitle.trim(" ")));
    } else {
      dispatch(addList(title.trim(" ")));
    }
    navigation.goBack();
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
          <TouchableOpacity onPress={addEditListTitle}>
            <CustomText regular size={18} color={theme.secondary}>
              {isEditing ? "Rename" : "Add"}
            </CustomText>
          </TouchableOpacity>
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
    borderBottomWidth: 1,
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "customRegular",
    fontSize: 18,
    color: "white",
  },
});
