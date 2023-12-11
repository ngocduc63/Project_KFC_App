import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import ItemCart from "../../components/cart/ItemCart";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

const CartList = ({ navigation }) => {
  const route = useRoute();
  const params = route.params;

  const [listCart, SetListCart] = useState(null);
  const [isLogin, SetIsLogin] = useState();

  const setLogin = async () => {
    try {
      const login = await AsyncStorage.getItem("isLogin");
      SetIsLogin(login);
    } catch (e) {
      console.log("Lỗi lưu data local: ");
    }
  };

  const resetCart = async  () =>{
    try {
      const userName = await AsyncStorage.getItem("userName");
      const cartDataUser = await AsyncStorage.getItem("cartUser");
      const cartUser = JSON.parse(cartDataUser || "[]");
      let cartUserCopy = [...cartUser];
      let checkCart = false;

      for(const item of cartUserCopy) {
        if(item.userName == userName) {
          checkCart = true;
        }
      }

      if(checkCart){
        for(const item of cartUserCopy) {
          if(item.userName == userName) {
            item.cartData.unshift(listCart);
          }
        }
      }
      else {
        const data = {
          'userName': userName,
          'cartData' : [listCart],
        }

        cartUserCopy.push(data);
      }

      await AsyncStorage.setItem("cartUser", JSON.stringify(cartUserCopy));

      await AsyncStorage.setItem("cartData", JSON.stringify([]));

    } catch (e) {
      console.log("Lỗi reset cart: " + e);
    }
  }

  const getCartData = async () => {
    try {
      const cartDataStringTest = await AsyncStorage.getItem("cartData");
      const cartDataString = await AsyncStorage.getItem("cartData");
      const cartData = JSON.parse(cartDataString || "[]");
      SetListCart(cartData);
    } catch (e) {
      console.log("Lỗi lưu data local: ");
    }
  };
  
  const executeOnLoad = () => {
    getCartData();
    setLogin();
  };

  useEffect(() => {
    executeOnLoad();
  });
  const listCartTest = [
    // {
    //   id: 1,
    //   image:
    //     "https://static.kfcvietnam.com.vn/images/items/lg/dinner-1.jpg?v=3JQQkg",
    //   name: "KFC Dinner 79K",
    //   price: 158000,
    //   quantity: 1,
    //   description:
    //     "Cơm gà (1 Phần) + Gà Giòn Cay + Gà Rán(1 miếng) + Gà Giòn Cay + Pepsi Lon",
    // },
    // {
    //   id: 2,
    //   image:
    //     "https://static.kfcvietnam.com.vn/images/items/lg/dinner-1.jpg?v=3JQQkg",
    //   name: "KFC Dinner 79K",
    //   price: 158000,
    //   quantity: 1,
    //   description:
    //     "Cơm gà (1 Phần) + Gà Giòn Cay + Gà Rán(1 miếng) + Gà Giòn Cay + Pepsi Lon",
    // },
    // {
    //   id: 3,
    //   image:
    //     "https://static.kfcvietnam.com.vn/images/items/lg/dinner-1.jpg?v=3JQQkg",
    //   name: "KFC Dinner 79K",
    //   price: 158000,
    //   quantity: 1,
    //   description:
    //     "Cơm gà (1 Phần) + Gà Giòn Cay + Gà Rán(1 miếng) + Gà Giòn Cay + Pepsi Lon",
    // },
  ];
  const cartLength = listCart ? listCart.length : 0;
  return (
    <SafeAreaView onLayout={executeOnLoad}> 
      {/* Header */}
      <View className="px-5 h-20 border-b-[1px] border-zinc-300 fixed flex-row justify-between items-center">
        <TouchableHighlight
          underlayColor={"tranparent"}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../../assets/kfc_logo.png")}
            style={{ width: 130, height: "50%" }}
          />
        </TouchableHighlight>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <MaterialIcons name="account-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
      {/* set location */}
      <Header />
      {/* Content */}
      {cartLength <= 0 && (
        <View className="mt-3 mx-2">
          <Text className="text-3xl font-bold">Giỏ Hàng Của Tôi</Text>
          <View className="h-[400px] bg-white mx-5 rounded-lg mt-5 px-5">
            <Text className="text-3xl font-bold pt-5">
              Giỏ Hàng Của Bạn Đang Trống. Hãy Đặt món ngay!
            </Text>
            <TouchableOpacity
              className="mt-3 bg-red-600 w-2/3 justify-center items-center py-3 rounded-full"
              onPress={() => navigation.navigate("Menu")}
            >
              <Text className="text-white font-semibold">Bắt Đầu Đặt Hàng</Text>
            </TouchableOpacity>
            <View className="w-2/3 h-[50%] mt-5 ml-10">
              <Image
                source={require("../../assets/logo_cart.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>
        </View>
      )}
      {cartLength > 0 && (
        <View className="mx-3 mt-3">
          <Text className="text-3xl font-bold mb-3">Giỏ Hàng Của Tôi</Text>
          <FlatList
            data={listCart}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View className="mx-3">
                <ItemCart data={item} navigation={navigation} />
                {index === cartLength - 1 && (
                  <View>
                    <View className="h-[250px] w-full bg-white rounded p-5 relative">
                      <Text className="text-3xl font-bold">
                        {cartLength} MÓN
                      </Text>
                      <View className="h-[1px] w-full bg-gray-400 mt-5"></View>
                      <View className="flex-row justify-between mt-5">
                        <Text className="text-xl font-bold">Tổng tiền</Text>
                        <Text className="text-xl font-bold">
                          {listCart
                            .reduce(
                              (accumulator, currentItem) =>
                                accumulator + currentItem.price * currentItem.quantity,
                              0
                            )
                            .toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                              minimumFractionDigits: 0,
                            })}
                        </Text>
                      </View>
                      <View className="absolute bottom-4 items-center w-full ml-4">
                        <TouchableOpacity className="w-[90%] bg-red-600 py-3 rounded-full flex-row justify-around"
                        onPress={() => {
                          if(isLogin != null && isLogin == "true"){
                            Alert.alert("Thanh toán thành công");
                            resetCart();
                          }else {
                            Alert.alert("Đăng nhập để thanh toán");
                          }
                        }}
                        >
                          <Text className="font-bold text-white text-xl">
                            Thanh Toán
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View className="h-[630px] w-full"></View>
                  </View>
                )}
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CartList;
