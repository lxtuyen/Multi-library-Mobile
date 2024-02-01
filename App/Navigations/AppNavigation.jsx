import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigations from "./TabNavigation";
import SignUpScreen from "../Screens/auth/SignUpScreen";
import SignInScreen from "../Screens/auth/SignInScreen";
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen'

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}
      >
      <Stack.Screen
          name="Tab"
          component={TabNavigations}
          options={{animation: 'slide_from_bottom'}} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{animation: 'slide_from_bottom'}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{animation: 'slide_from_bottom'}} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{animation: 'slide_from_bottom'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
