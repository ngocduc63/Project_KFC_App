import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartList from "./CartList";
import Profile from "../Profile";
import ItemDetail from "../../components/menu/ItemDetail";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const First = () => {
  const route = useRoute();
  const params = route.params;
  return (
    <Stack.Navigator
      initialRouteName="CartList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CartList" component={CartList} initialParams={params}/>
      <Stack.Screen name="ItemDetail" component={ItemDetail} initialParams={params}/>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default First;
