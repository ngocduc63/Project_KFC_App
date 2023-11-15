import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Alert } from "react-native";

const Register = ({ navigation }) => {
  const [isShowPassWord, setIsShowPassWord] = useState(true);
  const [isCheckPolicy, setIsCheckPolicy] = useState(false);
  const scrollViewRef = useRef();
  const scrollToPosition = () => {
    scrollViewRef.current.scrollTo({ y: 200, animated: true });
  };
  return (
    <SafeAreaView>
      <ScrollView className="gap-y-5" ref={scrollViewRef}>
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
          <Text className="text-3xl font-bold text-lef">ĐĂNG KÝ</Text>
          <View className="mt-5">
            <Text className="text-xl font-bold text-left mb-3">
              Địa chỉ email*
            </Text>
            <View className="w-full border-[1px] border-zinc-500 h-12 rounded-xl justify-center items-center pl-3">
              <TextInput
                style={{ width: "100%", fontSize: 20 }}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Nhập email của bạn"
                selectionColor={"red"}
              />
            </View>

            <Text className="text-xl font-bold text-left mt-5 mb-3">
              Họ và tên*
            </Text>
            <View className="w-full border-[1px] border-zinc-500 h-12 rounded-xl justify-between items-center flex-row px-8">
              <TextInput
                style={{ width: "100%", fontSize: 20, marginLeft: -16 }}
                placeholder="Nhập tên của bạn"
              />
            </View>

            <Text className="text-xl font-bold text-left mt-5 mb-3">
              Mật khẩu*
            </Text>
            <View className="w-full border-[1px] border-zinc-500 h-12 rounded-xl justify-between items-center flex-row px-8">
              <TextInput
                style={{ width: "100%", fontSize: 20, marginLeft: -16 }}
                placeholder="Nhập mật khẩu của bạn"
                autoCapitalize="none"
                secureTextEntry={isShowPassWord}
                onFocus={scrollToPosition}
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

            <View className="flex-row pr-5 gap-x-2 mt-5">
              {/* <CheckBox/> */}
              <TouchableOpacity
                onPress={() => setIsCheckPolicy(!isCheckPolicy)}
              >
                {isCheckPolicy === false ? (
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    size={30}
                    color="black"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="checkbox-marked"
                    size={30}
                    color="black"
                  />
                )}
              </TouchableOpacity>

              <Text className="text-[16px]">
                Tôi đã đọc và đồng ý với các
                <Text
                  className="text-[18px] font-bold underline"
                  onPress={() => Linking.openURL("https://www.google.com/")}
                >
                  {" "}
                  Chính Sách Hoạt Động{" "}
                </Text>
                và
                <Text
                  className="text-[18px] font-bold underline"
                  onPress={() => Linking.openURL("https://www.google.com/")}
                >
                  {" "}
                  Chính Sách Bảo Mật Thông Tin Của KFC Việt Nam
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              className="w-full h-16 justify-center items-center bg-red-600 rounded-full my-5"
              onPress={() => {
                if (isCheckPolicy) navigation.navigate("Home");
                else
                  Alert.alert(
                    "Vui lòng đồng ý chính sách hoạt động và bảo mật !!!"
                  );
              }}
            >
              <Text className="text-xl font-bold text-left text-white">
                Tạo Tài Khoản
              </Text>
            </TouchableOpacity>
          </View>
          {/* login */}
          <View className="flex-row justify-center items-center gap-x-2">
            <Text className="text-[16px]">Bạn đã có tài khoản?</Text>
            <TouchableHighlight
              onPress={() => navigation.navigate("Login")}
              underlayColor={"tranparent"}
            >
              <Text className="text-xl font-bold text-left underline">
                Đăng nhập
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View className="h-20 w-full"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
