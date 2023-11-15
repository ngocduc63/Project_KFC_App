import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const ItemCart = (props) => {
  const data = props.data;
  const navigation = props.navigation;
  const [isAvtiveDescription, SetIsActiveDescription] = useState(false);
  const [quantity, SetQuantity] = useState(data.quantity);
  const toggleDescription = () => {
    SetIsActiveDescription(!isAvtiveDescription);
  };
  return (
    <TouchableOpacity
      className="bg-white rounded  mb-5"
      onPress={() => {
        navigation.reset({
          index: 0,
          routes: [
            { name: "ItemDetail", params: { data: data, isCart: true } },
          ],
        });
      }}
    >
      <View className="flex-row w-full border-b-[1px] border-gray-400 border-solid">
        <View className="h-28 w-1/3 mx-3 ">
          <Image
            source={{ uri: data.image }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View className="mt-3 w-[60%] relative">
          <Text className="font-semibold text-base">{data.name}</Text>
          <TouchableOpacity
            className="items-end w-full pr-3 -mt-5"
            onPress={toggleDescription}
          >
            {!isAvtiveDescription && (
              <AntDesign name="down" size={18} color="black" />
            )}
            {isAvtiveDescription && (
              <AntDesign name="up" size={18} color="black" />
            )}
          </TouchableOpacity>
          {isAvtiveDescription && (
            <View className="h-24 mt-3">
              <Text>{data.description}</Text>
            </View>
          )}
          <View className="absolute bottom-3 flex-row gap-x-3">
            <TouchableOpacity
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: "ItemDetail",
                      params: { data: data, isCart: true },
                    },
                  ],
                });
              }}
            >
              <Text className="font-bold underline">Chỉnh Sửa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="font-bold underline">Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="py-3">
        <View className="flex-row items-center gap-x-3 ml-1">
          <TouchableOpacity
            className="h-8 w-8 items-center justify-center border border-black border-solid rounded-full"
            onPress={() => {
              if (quantity - 1 >= 0) SetQuantity(quantity - 1);
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
        <View className="items-end mr-3 -mt-8">
          <Text className="text-xl font-semibold">
            {data.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
              minimumFractionDigits: 0,
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCart;
