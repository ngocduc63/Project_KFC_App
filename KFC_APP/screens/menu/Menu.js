import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewMenu from "./ViewMenu";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Menu = () => {
  const route = useRoute();
  const params = route.params;

  return (
    <Stack.Navigator
      initialRouteName="ViewMenu"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ViewMenu" component={ViewMenu} initialParams={params}/>
    </Stack.Navigator>
  );
};

export default Menu;
