import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "../screens/menu/Menu";
import FirstOrder from "../screens/home/FirstOrder";
import Cart from "../screens/cart/Cart";
import First from "../screens/Fisrt";
import {Text, Image, View } from "react-native";

const Tab = createBottomTabNavigator();
export class NavBar extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            elevation: 0,
            backgroundColor: "#ffffff",
            height: 70,
            paddingBottom: 10
          },
        }}
      >
        <Tab.Screen
          name="FirstOrder"
          component={FirstOrder}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/home.png")}
                  resizeMode="contain"
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "red" : "#000000",
                  }}
                />
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Trang chủ
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/menu.png")}
                  resizeMode="contain"
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "red" : "#000000",
                  }}
                />
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Thực đơn
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Card"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/cart.png")}
                  resizeMode="contain"
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "red" : "#000000",
                  }}
                />
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Giỏ Hàng
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Fisrt"
          component={First}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/more.png")}
                  resizeMode="contain"
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "red" : "#000000",
                  }}
                />
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Thêm
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default NavBar;

