import React from "react";
import { TextInput, StyleSheet } from "react-native";

const TheTextInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  autoCapitalize = "sentences",
  inputMode = "text",
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      inputMode={inputMode}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "gray",
    backgroundColor: "#FFF2D7",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default TheTextInput;
