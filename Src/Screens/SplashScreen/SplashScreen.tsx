import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import SplashScreenStyles from "./SplashScreenStyles";
import { SvgXml } from "react-native-svg";
import { logo } from "../../Assets/images/logo";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import { StatusBar } from "expo-status-bar";

const SplashScreen = () => {
  return (
    <View style={SplashScreenStyles.container}>
      <StatusBar style="light"/>
      <SvgXml
        style={SplashScreenStyles.logo}
        xml={logo}
        height={getHeightEquivalent(63.61)}
        width={getWidthEquivalent(267.42)}
      ></SvgXml>
    </View>
  );
};

export default SplashScreen;
