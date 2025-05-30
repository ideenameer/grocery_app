import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import SplashScreen from "./Src/Screens/SplashScreen/SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OnBoardScreen from "./Src/Screens/OnBoardScreen/OnBoardScreen";
import BottomBar from "./Src/Navigation/BottomBar";
import { NavigationContainer } from "@react-navigation/native";
import MainStackScreen from "./Src/Navigation/MainStack";

const loadFonts = () => {
  return Font.loadAsync({
    "Gilroy-Bold": require("./Src/Assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-ExtraBold": require("./Src/Assets/fonts/Gilroy-ExtraBold.ttf"),
    "Gilroy-Medium": require("./Src/Assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("./Src/Assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-SemiBold": require("./Src/Assets/fonts/Gilroy-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading screen
  }
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
        <MainStackScreen/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
