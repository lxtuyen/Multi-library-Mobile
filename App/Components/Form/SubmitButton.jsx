import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
      <Text style={styles.btnText}>
        {loading ? "Please Wait..." : btnTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: "rgb(250 204 21)",
    borderRadius: 5,
    paddingBottom: 12,
    paddingTop: 12,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(55 65 81)",
  },
});

export default SubmitButton;
