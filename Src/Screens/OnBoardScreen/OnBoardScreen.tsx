import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { OnBoardScreenStyles } from "./OnBoardScreenStyles";
import { SvgXml } from "react-native-svg";
import { carrot } from "../../Assets/images/carrot";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const OnBoardScreen = () => {
  return (
    <View style={[OnBoardScreenStyles.container]}>
      <StatusBar hidden={true}></StatusBar>
      <ImageBackground
        style={OnBoardScreenStyles.image}
        resizeMode="cover"
        source={require("../../Assets/images/onBoardImage.png")}
      >
        <View style={OnBoardScreenStyles.carrotLogo}>
          <SvgXml xml={carrot} height={"100%"} width={"100%"}></SvgXml>
        </View>
        <Text style={OnBoardScreenStyles.Titletext}>Welcome to our store</Text>
        <Text style={OnBoardScreenStyles.description}>
          Ger your groceries in as fast as one hour
        </Text>
        <TouchableOpacity style={OnBoardScreenStyles.button}>
          <Text style={OnBoardScreenStyles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default OnBoardScreen;
