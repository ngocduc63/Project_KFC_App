import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const CartList = ({ navigation }) => {
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
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
      <ScrollView className="mt-3 mx-2">
        <Text className="text-3xl font-bold">Giỏ Hàng Của Tôi</Text>
        <View className="h-[400px] bg-white mx-5 rounded-lg mt-5 px-5">
          <Text className="text-3xl font-bold pt-5">
            Giỏ Hàng Của Bạn Đang Trống. Hãy Đặt món ngay!
          </Text>
          <TouchableOpacity className="mt-3 bg-red-600 w-2/3 justify-center items-center py-3 rounded-full"
          onPress={() => navigation.navigate("Menu")

          }>
            <Text className="text-white font-semibold">Bắt Đầu Đặt Hàng</Text>
          </TouchableOpacity>
          <View className = "w-2/3 h-[50%] mt-5 ml-10">
          <Image
            source={require("../../assets/logo_cart.png")}
            style={{ width: "100%", height: "100%" }}
          />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartList;
