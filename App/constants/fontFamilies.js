import { Font } from 'expo';

const fontFamilies = async () => {
    // Tải font
    await Font.loadAsync({
      bold: require("../../assets/fonts/AirbnbCereal_W_Bd.otf"),
      regular: require("../../assets/fonts/AirbnbCereal_W_Lt.otf"),
      medium: require("../../assets/fonts/AirbnbCereal_W_Md.otf"),
      semiBold: require("../../assets/fonts/AirbnbCereal_W_XBd.otf"),
    });
    // Trả về một object chứa các font đã tải
    return {
        bold: 'AirbnbCereal_W_Bd',
        regular: 'AirbnbCereal_W_Lt',
        medium: 'AirbnbCereal_W_Md',
        semiBold: 'AirbnbCereal_W_XBd'
    };
};

export default fontFamilies;