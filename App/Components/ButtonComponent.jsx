import { View, TouchableOpacity } from "react-native";
import React from "react";
import TextComponent from "./TextComponent";
import {globalStyles}  from "../styles/GlobalStyles";
import { appColors } from "../constants/appColors";

const ButtonComponent = ({
  icon,
  text,
  textColor,
  textStyles,
  textFont,
  color,
  styles,
  onPress,
  iconFlex,
  type,
  disable,
}) => {
  return type === "primary" ? (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        disabled={disable}
        onPress={onPress}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color
              ? color
              : disable
              ? appColors.gray4
              : appColors.primary,
            marginBottom: 17,
            width: "90%",
          },
          styles,
        ]}
      >
        {icon && iconFlex === "left" && icon}
        <TextComponent
          text={text}
          color={textColor ?? appColors.white}
          styles={[
            textStyles,
            {
              marginLeft: icon ? 12 : 0,
              fontSize: 16,
              textAlign: "center",
            },
          ]}
          flex={icon && iconFlex === "right" ? 1 : 0}
          font={textFont ?? fontFamilies.medium}
        />
        {icon && iconFlex === "right" && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        flex={0}
        text={text}
        color={type === 'link' ? appColors.primary : appColors.text}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
