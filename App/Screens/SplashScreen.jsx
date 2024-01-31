import React from "react";
import { ImageBackground, Image, ActivityIndicator } from "react-native";
import { appInfor }  from "../constants/appInfor";
import { appColors } from "../constants/appColors"
import images from "../assets/images";

const SplashScreen = () => {
  return (
    <ImageBackground
      source={images.splashImg}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      imageStyle={{ flex: 1 }}
    >
      <Image
        source={images.logo}
        style={{
          width: appInfor.sizes.WIDTH * 0.7,
          resizeMode: "contain",
        }}
      />
      <ActivityIndicator color={appColors.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;
