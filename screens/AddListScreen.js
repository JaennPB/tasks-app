import React, { useLayoutEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import CustomText from "../components/UI/CustomText";

import { useDispatch } from "react-redux";
import { addList } from "../store/tasksSlice";

import theme from "../theme/theme";

const AddListScreen = (props) => {
  const [title, setTitle] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const inputRef = useRef(null);

  const addListHandler = () => {
    if (title === "My tasks") return;
    dispatch(addList(title));
    navigation.goBack();
  };

  useLayoutEffect(() => {
    Platform.OS === "ios"
      ? inputRef.current.focus()
      : setTimeout(() => inputRef.current.focus(), 10);

    props.navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={addListHandler}>
            <CustomText regular size={18} color={theme.accent}>
              Add
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
        placeholder="Enter list name"
        placeholderTextColor="grey"
        ref={inputRef}
        autoCapitalize="sentences"
        onChangeText={setTitle}
        value={title}
      />
    </SafeAreaView>
  );
};

export default AddListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: "flex-end",
  },
  input: {
    marginTop: 10,
    borderTopColor: theme.secondary,
    borderTopWidth: 2,
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "customRegular",
    fontSize: 18,
    color: "white",
  },
});
