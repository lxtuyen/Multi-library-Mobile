import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigations from "./TabNavigation";
import SignUpScreen from "../Screens/SignUpScreen/SignUpScreen";
import SignInScreen from "../Screens/SignInScreen/SignInScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
      <Stack.Screen
          name="Tab"
          component={TabNavigations}
          options={{animation: 'slide_from_bottom'}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{animation: 'slide_from_bottom'}} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{animation: 'slide_from_bottom'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;