import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "../screens/Menu";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import More from "../screens/More";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

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
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
        <Tab.Screen name="Menu" component={Menu} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
        <Tab.Screen name="Card" component={Cart} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
        <Tab.Screen name="More" component={More} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
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

const styles = StyleSheet.create({
  container: {},
});
