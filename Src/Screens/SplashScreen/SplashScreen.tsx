import { SafeAreaView, Text, View } from "react-native";
import React, { useEffect } from "react";
import SplashScreenStyles from "./SplashScreenStyles";
import { SvgXml } from "react-native-svg";
import { logo } from "../../Assets/images/logo";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import { StatusBar } from "expo-status-bar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const SplashScreen = ({ navigation }:any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("BottomBar");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
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
