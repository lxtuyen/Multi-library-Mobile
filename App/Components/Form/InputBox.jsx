import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const InputBox = ({
  inputTitle,
  autoComplete,
  keyboardType,
  secureTextEntry = false,
  value,
  setValue,
  placeholder,
}) => {
  return (
    <View>
      <Text  style={styles.label}>{inputTitle}</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
  },
  label: {
    color: "rgb(55 65 81)",
    marginLeft: 16,
  },
  input: {
    padding: 16,
    backgroundColor: "rgb(243 244 246)",
    color: "rgb(55 65 81)",
    borderRadius: 1,
    marginBottom: 12,
  },
});

export default InputBox;
