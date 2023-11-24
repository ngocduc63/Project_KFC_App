import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const ItemDetail = ({ navigation }) => {
  const route = useRoute();
  const item = route.params.data;
  const isCart = route.params.isCart;
  const [quantity, SetQuantity] = useState(item.quantity);
  const setCartData = async (data, quantity) => {
    try {
      let cart = await AsyncStorage.getItem("cartData");
      cart = cart ? JSON.parse(cart) : [];
      const indexToUpdate = cart.findIndex((item) => item.name === data.name);
  
      if (indexToUpdate !== -1) {
        data.quantity = quantity;

        cart[indexToUpdate] = { ...cart[indexToUpdate], ...data };
        
        await AsyncStorage.setItem("cartData", JSON.stringify(cart));
  
        Alert.alert("Sửa thành công");
      } 
    } catch (e) {
      console.log("Lỗi lưu data local: " + e.message);
    }
  };
  const addCartData = async (data) => {
    try {
      let cart = await AsyncStorage.getItem("cartData");
      cart = cart ? JSON.parse(cart) : [];
  
      const existingItemIndex = cart.findIndex(item => item.name === data.name);
  
      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart = [...cart, { ...data, quantity: 1 }];
      }
  
      await AsyncStorage.setItem("cartData", JSON.stringify(cart));
  
      Alert.alert("Thêm món ăn thành công");
  
    } catch (e) {
      console.log("Lỗi lưu data local: " + e.message);
    }
  };
  return (
    <SafeAreaView>
      {/* set location */}
      <View className="h-36 bg-gray-800 items-center justify-center pb-5">
        <Text className="text-[16px] text-slate-50 font-semibold pb-5">
          Đặt ngay{"  "}
          <Image
            source={require("../../assets/delivery.png")}
            style={{ width: 50, height: 50 }}
          />{" "}
          Giao hàng{" "}
          <Image
            source={require("../../assets/bag_take_away.png")}
            style={{ width: 50, height: 50 }}
          />{" "}
          Hoặc mang đi
        </Text>
        <TouchableOpacity className="bg-red-700 justify-center items-center h-[50px] px-20 rounded-full">
          <Text className="text-[16px] text-slate-50 font-semibold">
            {" "}
            Bắt đầu đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (isCart) {
            navigation.navigate("CartList");
          } else navigation.navigate("ViewMenu");
        }}
        className="bg-blue-400 w-24 h-10 mt-1 ml-1 items-center justify-center rounded-md "
      >
        <Text className="text-white font-semibold text-base">Quay lại</Text>
      </TouchableOpacity>
      {/* content */}
      <View className="mt-5">
        <View className="h-48 border-b-[1px] border-gray-400 border-solid">
          <Image
            source={{ uri: item.image }}
            style={{ width: "100%", height: "90%" }}
            resizeMode="contain"
          />
        </View>
        <View className="mt-3 ml-4">
          <Text className="text-2xl font-bold -ml-3">{item.name}</Text>
          <Text className="text-base text-gray-500">{item.description}</Text>
          {item.timeSell && (
            <Text className="text-base text-gray-500">{item.timeSell}</Text>
          )}
        </View>
        <View>
          <View className="items-end mt-5 mr-5">
            <Text className="text-2xl font-bold">
              {quantity
                ? parseInt(item.price * quantity, 10).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                    minimumFractionDigits: 0,
                  })
                : parseInt(item.price, 10).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                    minimumFractionDigits: 0,
                  })}
            </Text>
          </View>
          {isCart && (
            <View className="-mt-8">
              <View className="flex-row items-center gap-x-3 ml-1">
                <TouchableOpacity
                  className="h-8 w-8 items-center justify-center border border-black border-solid rounded-full"
                  onPress={() => {
                    if (quantity - 1 >= 1) SetQuantity(quantity - 1);
                  }}
                >
                  <AntDesign name="minus" size={20} color="black" />
                </TouchableOpacity>
                <Text className="text-xl">{quantity}</Text>
                <TouchableOpacity
                  className="h-8 w-8 items-center justify-center border border-black border-solid rounded-full"
                  onPress={() => SetQuantity(quantity + 1)}
                >
                  <AntDesign name="plus" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View className="items-center mt-5 h-10">
            {!isCart && (
              <TouchableOpacity
                className="items-center w-[70%] h-full bg-gray-400 rounded-full justify-center"
                onPress={() => {
                  addCartData(item);
                }}
              >
                <Text className="text-white text-lg font-bold">
                  Thêm vào giỏ
                </Text>
              </TouchableOpacity>
            )}
            {isCart && (
              <TouchableOpacity
                className="items-center w-[70%] h-full bg-red-600 rounded-full justify-center"
                onPress={() => {
                  setCartData(item, quantity);
                  //navigation.navigate("CartList");
                  navigation.reset({
                    index: 0,
                    routes: [
                      { name: "CartList", params: { data: "ok" } },
                    ],
                  });
                }}
              >
                <Text className="text-white text-lg font-bold">Xác Nhận</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemDetail;
