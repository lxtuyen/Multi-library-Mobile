import { Text, Platform } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

import { appColors } from "../constants/appColors";
import fontFamilies from '../constants/fontFamilies'
import { globalStyles } from "../styles/GlobalStyles";

const TextComponent = ({ text, size, flex, font, color, styles, title }) => { 
  const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;;

  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ? size : title ? 24 : fontSizeDefault,
          fontFamily: font
            ? font
            : title
            ? fontFamilies.medium
            : fontFamilies.regular,
        },
        styles,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
