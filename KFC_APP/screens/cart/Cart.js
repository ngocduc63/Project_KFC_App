import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartList from "./CartList";
import Profile from "../Profile";

const Stack = createNativeStackNavigator();
const First = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CartList" component={CartList} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default First;
