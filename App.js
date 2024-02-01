import React from "react";
import { StyleSheet } from "react-native";
import AppNavigation from "./App/Navigations/AppNavigation";
 

export default function App() {
  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
