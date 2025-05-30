import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  fontEq,
  getHeightEquivalent,
  getWidthEquivalent,
} from "../Helpers/Utilities/Utilities";
import ExporeScreen from "../Screens/ExporeScreen/ExporeScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import CartScreen from "../Screens/CartScreen/CartScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import FavoriteScreen from "../Screens/favouriteScreen/FavoriteScreen";
import { width } from "../Helpers/Constants/AppConstants";
import { SvgXml } from "react-native-svg";
import { activeHomeIcon } from "../Assets/images/activeHomeIcon";
import { homeIcon } from "../Assets/images/homeIcon";
import { activeExploreIcon } from "../Assets/images/activeExploreIcon";
import { exploreIcon } from "../Assets/images/exploreIcon";
import { activeCartIcon } from "../Assets/images/activeCartIcon";
import { cartIcon } from "../Assets/images/cartIcon";
import { activeFavIcon } from "../Assets/images/activeFavIcon";
import { favIcon } from "../Assets/images/favIcon";
import { activeProfileIcon } from "../Assets/images/activeProfileIcon";
import { profileIcon } from "../Assets/images/profileIcon";
const Tab = createBottomTabNavigator();
const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: width,
          height: getHeightEquivalent(92),
          borderTopEndRadius: getWidthEquivalent(15),
          borderTopStartRadius: getWidthEquivalent(15),
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          backgroundColor: "#FFFFFF",
        },
      }}
      initialRouteName="home"
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }:any) => {
            return focused ? (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: getHeightEquivalent(15),
                    width:getWidthEquivalent(55),
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml
                    xml={activeHomeIcon}
                    height={"100%"}
                    width={"100%"}
                  ></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#53B175",
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Home
                </Text>
              </View>
            ) : (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: getHeightEquivalent(15),
                    width:getWidthEquivalent(55),
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml
                    xml={homeIcon}
                    height={"100%"}
                    width={"100%"}
                  ></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#000",
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExporeScreen}
        options={{
          tabBarIcon: ({ focused }:any) => {
            return focused ? (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: getHeightEquivalent(15),
                    width:getWidthEquivalent(55),
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml
                    xml={activeExploreIcon}
                    height={"100%"}
                    width={"100%"}
                  ></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#53B175",
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Explore
                </Text>
              </View>
            ) : (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: getHeightEquivalent(15),
                    width:getWidthEquivalent(55),
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml
                    xml={exploreIcon}
                    height={"100%"}
                    width={"100%"}
                  ></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#000",
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Explore
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }:any) => {
            return focused ? (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: getHeightEquivalent(15),
                    width:getWidthEquivalent(55),
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml
                    xml={activeCartIcon}
                    height={"100%"}
                    width={"100%"}
                  ></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#53B175",
                  }}
                >
                  Cart
                </Text>
              </View>
            ) : (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: getHeightEquivalent(15),
                    width:getWidthEquivalent(55),
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml
                    xml={cartIcon}
                    height={"100%"}
                    width={"100%"}
                  ></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#000",
                  }}
                >
                  Cart
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="favourite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }:any) => {
            return focused ? (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: getHeightEquivalent(15),
                  width:getWidthEquivalent(55),
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml
                    xml={activeFavIcon}
                    height={"100%"}
                    width={"100%"}
                  ></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#53B175",
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Favourite
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: getHeightEquivalent(15),
                  width:getWidthEquivalent(55),
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml xml={favIcon} height={"100%"} width={"100%"}></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#000",
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Favourite
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }:any) => {
            return focused ? (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: getHeightEquivalent(15),
                    width:getWidthEquivalent(55),
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml
                    xml={activeHomeIcon}
                    height={"100%"}
                    width={"100%"}
                  ></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#53B175",
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Profile
                </Text>
              </View>
            ) : (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: getHeightEquivalent(15),
                    width:getWidthEquivalent(55),   
                }}
              >
                <View
                  style={{
                    height: getHeightEquivalent(24),
                    width: getHeightEquivalent(24),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml
                    xml={homeIcon}
                    height={"100%"}
                    width={"100%"}
                  ></SvgXml>
                </View>
                <Text
                  style={{
                    marginTop: getHeightEquivalent(3),
                    fontSize: fontEq(12),
                    color: "#000",
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;

