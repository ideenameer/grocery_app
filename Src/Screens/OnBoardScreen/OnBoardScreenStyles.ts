import { StyleSheet } from "react-native";
import { height, width } from "../../Helpers/Constants/AppConstants";
import {
  fontEq,
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";

export const OnBoardScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  image: {
    height: height,
    width: width,
  },
  carrotLogo: {
    height: getHeightEquivalent(56.36),
    width: getWidthEquivalent(48.47),
    marginTop: getHeightEquivalent(485.61),
    alignSelf: "center",
  },
  Titletext: {
    color: "white",
    height: getHeightEquivalent(100),
    width: getWidthEquivalent(256),
    fontSize: fontEq(48),
    marginTop: getHeightEquivalent(30),
    textAlign: "center",
    fontFamily:"Gilroy-SemiBold",
    alignSelf: "center",
  },
  description:{
    color: "#FCFCFC",
    opacity:0.7,
    fontSize: fontEq(16),
    marginTop: getHeightEquivalent(19),
    fontFamily:"Gilroy-Medium",
    alignSelf: "center",
  },
  button:{
    marginTop: getHeightEquivalent(40),
    height: getHeightEquivalent(67),
    width: getWidthEquivalent(353),
    alignSelf: "center",
    borderRadius:19,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#53B175",
  },
  buttonText:{
    color: "#FFF9FF",
    fontSize: fontEq(18),
    fontFamily:"Gilroy-SemiBold",
  }
});
