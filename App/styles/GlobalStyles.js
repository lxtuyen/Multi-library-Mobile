import {StyleSheet} from 'react-native';
import { useFonts } from "expo-font";

import {appColors} from '../constants/appColors';


export const GlobalStyles = () => {
  const fontFamilies = useFonts({
    semiBold: require("../../assets/fonts/AirbnbCereal_W_Bd.otf"),
    regular: require("../../assets/fonts/AirbnbCereal_W_Lt.otf"),
    medium: require("../../assets/fonts/AirbnbCereal_W_Md.otf"),
    bold: require("../../assets/fonts/AirbnbCereal_W_XBd.otf"),
  });
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appColors.white,
    },

    text: {
      fontFamily: fontFamilies.regular,
      fontSize: 14,
      color: appColors.text,
    },

    button: {
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: appColors.white,
      paddingHorizontal: 16,
      paddingVertical: 16,
      minHeight: 56,
      flexDirection: 'row',
    },
    shadow: {
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 6,
    },

    section: {
      paddingHorizontal: 16,
      paddingBottom: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3D56F0',
      width: 30,
      height: 30,
      borderRadius: 100,
    },
  });
};