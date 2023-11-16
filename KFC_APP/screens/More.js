import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Zocial } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const More = ({ navigation }) => {
  const [isLogin, SetIsLogin] = useState(null);

  const getLogin = async () => {
    try {
      const login = await AsyncStorage.getItem("isLogin");
      if (login) {
        SetIsLogin(login);
      }
    } catch (e) {
      console.log("Lỗi lưu data local: ");
    }
  };
  getLogin();

  const [iconNames, setIconNames] = useState(["down", "down", "down", "down"]);
  const lstTitle = [
    {
      "Danh Mục Món Ăn": [
        "Ưu Đãi",
        "Món Mới",
        "Combo 1 Người",
        "Combo Nhóm",
        "Gà Rán - Gà Quay",
        "Burger - Cơm - Mì Ý",
      ],
    },
    {
      "Về KFC": [
        "Câu Chuyện Của Chúng Tôi",
        "Tin Khuyến Mãi",
        "Tin Tức",
        "Đặt Tiệc Sinh Nhật",
      ],
    },
    {
      "Liên hệ KFC": ["Theo Dõi Đơn Hàng", "Hệ Thống Nhà Hàng", "Liên Hệ KFC"],
    },
    {
      "Chính sách": [
        "Chính Sách Bảo Mật",
        "Chính Sách & Quy Định",
        "Sử Dụng Cookie",
      ],
    },
  ];

  const toggleIcon = (index) => {
    const newIconNames = [...iconNames];
    const lastUpItemIndex = newIconNames.indexOf(
      newIconNames.filter((item) => item === "up")[0]
    );

    if (lastUpItemIndex >= 0 && lastUpItemIndex !== index)
      newIconNames[lastUpItemIndex] = "down";
    newIconNames[index] = newIconNames[index] === "down" ? "up" : "down";

    setIconNames(newIconNames);
  };

  return (
    <SafeAreaView>
      {/* header */}
      <View className=" mx-5 flex-initial min-h-fit pt-5">
        <Text className="text-4xl font-semibold text-left">Bắt đầu</Text>
        {isLogin == "false" && (
          <View className=" pt-4 flex-row gap-2">
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-xl font-medium text-left">Đăng nhập</Text>
            </TouchableOpacity>
            <Text className="text-xl font-medium text-left"> / </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="text-xl font-medium text-left">Đăng ký</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* list introduce */}
      <View className="mx-5 pt-6 mb-1 gap-y-2">
        {iconNames.map((iconName, index) => (
          <View key={index}>
            <TouchableOpacity
              className="pb-2 border-b-[1px] border-zinc-300 border-solid flex-row justify-between"
              onPress={() => toggleIcon(index)}
            >
              <Text className="text-xl font-bold">
                {Object.keys(lstTitle[index])}
              </Text>
              <AntDesign
                name={iconName}
                size={18}
                color="black"
                style={{ marginTop: 6 }}
              />
            </TouchableOpacity>
            {iconName === "up" && (
              <View className="pl-2 pt-3 pb-4 flex-col gap-y-2 border-b-[1px] border-zinc-300 border-solid">
                {Object.values(lstTitle[index])[0].map((item, index) => (
                  <Text key={index} className="text-[14px]">
                    {item}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* social */}
      <View className="bg-black h-2/5 items-center">
        <Text className="text-2xl font-bold text-left py-5 text-gray-300">
          Kết nối với KFC
        </Text>
        <View className="flex-row gap-5">
          <TouchableOpacity>
            <View className="border-[1px] border-zinc-300 rounded-full w-14 h-14 items-center justify-center">
              <Zocial
                name="facebook"
                size={24}
                color="#fff"
                style={{ marginBottom: 2, marginRight: 6 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="border-[1px] border-zinc-300 rounded-full w-14 h-14 items-center justify-center">
              <Zocial name="instagram" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="border-[1px] border-zinc-300 rounded-full w-14 h-14 items-center justify-center">
              <Zocial name="youtube" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="border-[1px] border-zinc-300 rounded-full w-14 h-14 items-center justify-center">
              <Zocial name="twitter" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
        <Text className="text-xs font-normal text-center mt-16 text-gray-300 border-t-[1px] border-zinc-300 border-solid w-5/6 p-8">
          Copy right 2023 KFC Viet Nam
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default More;
