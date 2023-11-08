import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [isShowPassWord, setIsShowPassWord] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView className="gap-y-8">
        {/* header */}
        <View className="px-5 h-20 border-b-[1px] border-zinc-300 fixed flex-row justify-between items-center">
          <TouchableHighlight
            underlayColor={"tranparent"}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              source={require("../assets/kfc_logo.png")}
              style={{ width: 130, height: "50%" }}
            />
          </TouchableHighlight>
          <TouchableOpacity>
            <MaterialIcons name="account-circle" size={50} color="black" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="px-5">
          <Text className="text-3xl font-bold text-left">ĐĂNG NHẬP</Text>
          <View className="mt-10">
            <Text className="text-xl font-bold text-left mb-3">Tài khoản*</Text>
            <View className="w-full border-[1px] border-zinc-500 h-14 rounded-xl justify-center items-center pl-3">
              <TextInput
                style={{ width: "100%", fontSize: 20 }}
                keyboardType="email-address"
                placeholder="Nhập email của bạn"
                selectionColor={"red"}
                autoCapitalize="none"
              />
            </View>
            <Text className="text-xl font-bold text-left mt-5 mb-3">
              Mật khẩu*
            </Text>
            <View className="w-full border-[1px] border-zinc-500 h-14 rounded-xl justify-between items-center flex-row px-8">
              <TextInput
                style={{ width: "100%", fontSize: 20, marginLeft: -16 }}
                placeholder="Nhập mật khẩu của bạn"
                secureTextEntry={isShowPassWord}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => {
                  setIsShowPassWord(!isShowPassWord);
                }}
              >
                {isShowPassWord === true ? (
                  <Entypo name="eye-with-line" size={24} color="black" />
                ) : (
                  <Entypo name="eye" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              className="w-full h-16 justify-center items-center bg-lime-600 rounded-full mt-10"
              onPress={() => navigation.navigate("Home")}
            >
              <Text className="text-xl font-bold text-left text-white">
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Social login */}
        <View className="px-5">
          <Text className="text-xl font-bold text-left">
            Hoặc đăng nhập với
          </Text>
          <View className="flex-row gap-x-5 mt-6">
            <TouchableOpacity className="w-20 h-12 justify-center bg-blue-500 items-center rounded-full">
              <FontAwesome name="facebook-f" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="w-20 h-12 justify-center bg-orange-700 items-center rounded-full">
              <FontAwesome name="google" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="w-20 h-12 justify-center bg-gray-950 items-center rounded-full">
              <FontAwesome name="apple" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Register */}

        <View className="flex-row justify-center items-center gap-x-2">
          <Text className="text-[16px]">Bạn chưa có tài khoản?</Text>
          <TouchableHighlight
            onPress={() => navigation.navigate("Register")}
            underlayColor={"tranparent"}
          >
            <Text className="text-xl font-bold text-left underline">
              Đăng ký
            </Text>
          </TouchableHighlight>
        </View>
        <View className="h-20 w-full"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
