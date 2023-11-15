import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import ItemCart from "../../components/cart/ItemCart";

const CartList = ({ navigation }) => {
  const listCart = [
    {
      id: 1,
      image:
        "https://static.kfcvietnam.com.vn/images/items/lg/dinner-1.jpg?v=3JQQkg",
      name: "KFC Dinner 79K",
      price: 158000,
      quantity: 1,
      description:
        "Cơm gà (1 Phần) + Gà Giòn Cay + Gà Rán(1 miếng) + Gà Giòn Cay + Pepsi Lon",
    },
    {
      id: 2,
      image:
        "https://static.kfcvietnam.com.vn/images/items/lg/dinner-1.jpg?v=3JQQkg",
      name: "KFC Dinner 79K",
      price: 158000,
      quantity: 1,
      description:
        "Cơm gà (1 Phần) + Gà Giòn Cay + Gà Rán(1 miếng) + Gà Giòn Cay + Pepsi Lon",
    },
    {
      id: 3,
      image:
        "https://static.kfcvietnam.com.vn/images/items/lg/dinner-1.jpg?v=3JQQkg",
      name: "KFC Dinner 79K",
      price: 158000,
      quantity: 1,
      description:
        "Cơm gà (1 Phần) + Gà Giòn Cay + Gà Rán(1 miếng) + Gà Giòn Cay + Pepsi Lon",
    },
  ];
  return (
    <SafeAreaView>
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
      {/* Content */}
      {listCart.length <= 0 && (
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
      {listCart.length > 0 && (
        <View className="mx-3 mt-3">
          <Text className="text-3xl font-bold mb-3">Giỏ Hàng Của Tôi</Text>
          <FlatList
            data={listCart}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View className="mx-3">
                <ItemCart data={item} navigation={navigation} />
                {index === listCart.length - 1 && (
                  <View>
                    <View className="h-[250px] w-full bg-white rounded p-5 relative">
                      <Text className="text-3xl font-bold">
                        {listCart.length} MÓN
                      </Text>
                      <View className="h-[1px] w-full bg-gray-400 mt-5"></View>
                      <View className="flex-row justify-between mt-5">
                        <Text className="text-xl font-bold">Tổng tiền</Text>
                        <Text className="text-xl font-bold">
                          {listCart
                            .reduce(
                              (accumulator, currentItem) =>
                                accumulator + currentItem.price,
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
                        <TouchableOpacity className="w-[90%] bg-red-600 py-3 rounded-full flex-row justify-around">
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
