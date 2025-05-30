import React, { FC } from 'react';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import BottomBar from './BottomBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const MainStack = createNativeStackNavigator();

const MainStackScreen: FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="SplashScreen" component={SplashScreen} />
        <MainStack.Screen name="BottomBar" component={BottomBar} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackScreen;
