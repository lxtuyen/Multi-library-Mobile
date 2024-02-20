import React, { useState, useEffect } from "react";
import {
  View,
  Touchable,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardType,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { EyeSlash } from "iconsax-react-native";

import { appColors } from "../constants/appColors";
import  globalStyles  from "../styles/GlobalStyles";

const InputComponent = ({
  value,
  onChange,
  affix,
  suffix,
  placeholder,
  isPassword,
  allowClear,
  type,
  onEnd,
}) => {
  const [isShowPass, setIsShowPass] = useState(false);
  useEffect(() => {
    setIsShowPass(isPassword);
  }, []);
  const handleTextChange = (val) => {
    onChange(val); // Call the prop function
  };
  return (
    <View style={[styles.inputContainer]}>
      {affix ?? affix}
      <TextInput
        style={[styles.input, globalStyles.text]}
        value={value}
        placeholder={placeholder ?? ""}
        onChangeText={handleTextChange}
        secureTextEntry={isShowPass}
        placeholderTextColor={"#747688"}
        keyboardType={type ?? "default"}
        autoCapitalize="none"
        onEndEditing={onEnd}
      />
      {suffix ?? suffix}
      <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange("")
        }
      >
        {isPassword ? (
          <FontAwesome
            name={isShowPass ? "eye-slash" : "eye"}
            size={22}
            color={appColors.gray}
          />
        ) : (
          value.length > 0 &&
          allowClear && (
            <AntDesign name="close" size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: "100%",
    minHeight: 56,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 19,
  },

  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text,
  },
});

export default InputComponent;
