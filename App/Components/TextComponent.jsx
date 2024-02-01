import { Text, Platform } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

import { appColors } from "../constants/appColors";
import { globalStyles } from "../styles/GlobalStyles";

const TextComponent = ({ text, size, flex, font, color, styles, title }) => {
  const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;;

  const fontFamilies = useFonts({
    semiBold: require("../../assets/fonts/AirbnbCereal_W_Bd.otf"),
    regular: require("../../assets/fonts/AirbnbCereal_W_Lt.otf"),
    medium: require("../../assets/fonts/AirbnbCereal_W_Md.otf"),
    bold: require("../../assets/fonts/AirbnbCereal_W_XBd.otf"),
  });
  if(!fontFamilies){
    return null
  }
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
