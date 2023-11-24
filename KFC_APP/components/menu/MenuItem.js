import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

const MenuItem = (props) => {
  const data = props.data;
  const title = props.tile;
  const navigation = props.navigation;
  let dataActive = data.map(() => false);
  let [isActiveDetails, setIsActiveDetails] = useState(dataActive);

  const setCartData = async (data) => {
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
    <View className="ml-5">
      {data.map((item, index) => (
        <TouchableOpacity key={index}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                { name: "ItemDetail", params: {index: index, data: item } },
              ],
            });
          }}
        >
          {isActiveDetails[index] && (
            <View className="mb-2 gap-x-3 bg-white rounded-md h-48 pt-2 w-[99.99%]">
              <View className="flex-row justify-end mr-2">
                <TouchableOpacity
                  className="bg-slate-400 h-8 w-8 items-center justify-center rounded-full"
                  onPress={() => {
                    const updatedDetails = [...isActiveDetails];
                    updatedDetails[index] = !updatedDetails[index];
                    setIsActiveDetails(updatedDetails);
                  }}
                >
                  <AntDesign name="close" size={16} color="black" />
                </TouchableOpacity>
              </View>
              <View className="items-center">
                <Text className="text-[18px] mt-6">{item.description}</Text>
                <Text className="text-[15px] mt-2">{item.timeSell}</Text>
              </View>
            </View>
          )}
          {!isActiveDetails[index] && (
            <View className="flex-row mb-2 gap-x-3 h-48 bg-white rounded-md w-[99.99%]">
              <View className="w-[28%] h-[60%] mt-2">
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View className="mt-1 w-[60%] pr-1">
                <View className="">
                  <Text className="text-[15px] font-semibold">{item.name}</Text>
                  <View className="-mr-10 -mt-5 items-end">
                    <TouchableOpacity
                      className="bg-slate-400 h-8 w-8 items-center justify-center rounded-full mr-5"
                      onPress={() => {
                        const updatedDetails = [...isActiveDetails];
                        updatedDetails[index] = !updatedDetails[index];
                        setIsActiveDetails(updatedDetails);
                      }}
                    >
                      <AntDesign name="exclamation" size={18} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="flex-row gap-x-3 mb-1">
                  <Text className="text-xl font-semibold">
                    {parseInt(item.price, 10).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 0,
                    })}
                  </Text>
                  {item.newPrice && (
                    <View>
                      <Text className="text-lg text-gray-500 font-semibold ">
                        {parseInt(item.newPrice, 10).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                          minimumFractionDigits: 0,
                        })}
                      </Text>
                      <View className="h-[2px] w-full bg-gray-500 -mt-[15px]"></View>
                    </View>
                  )}
                </View>
                <Text className=" text-gray-400 text-sm">
                  {item.description}
                </Text>
                {item.timeSell && (
                  <Text className="text-gray-400 text-sm">{item.timeSell}</Text>
                )}
                <View className="flex-row justify-end items-end flex-1 mb-3 -mr-4">
                  <TouchableOpacity
                    className="mt-2 w-32 items-center bg-gray-400 py-[8px] rounded-sm"
                    onPress={() => {
                      setCartData(item);
                      navigation.navigate("Menu");
                    }}
                  >
                    <Text className="text-white">Thêm vào giỏ</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuItem;
