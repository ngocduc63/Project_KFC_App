import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ItemDetail = ({ navigation }) => {
  const route = useRoute();
  const item = route.params.data;
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
        onPress={() => navigation.navigate("ViewMenu")}
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
              {parseInt(item.newPrice, 10).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
                minimumFractionDigits: 0,
              })}
            </Text>
          </View>
          <View className="items-center mt-5 h-10">
            <TouchableOpacity
              className="items-center w-[70%] h-full bg-gray-400 rounded-full justify-center"
              disabled={true}
            >
              <Text className="text-white text-lg font-bold">Thêm vào giỏ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemDetail;
