import React from "react";
import { Modal, StyleSheet, View } from "react-native";

const CustomModal = (props) => {
  return (
    <Modal transparent animationType="fade">
      <View style={styles.modal}>{props.children}</View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000080",
  },
});
