import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export class More extends Component {
  render() {
    return (
      <SafeAreaView>
        {/* header */}
        <View className=" ml-5 mt-5 flex-initial min-h-fit">
          <Text className="text-4xl font-semibold text-left">Bắt đầu</Text>
          <View className=" pt-4 flex-row gap-2">
            <TouchableOpacity>
              <Text className="text-xl font-medium text-left">
                Đăng nhập
              </Text>
            </TouchableOpacity>
            <Text className = "text-xl font-medium text-left"> / </Text>
            <TouchableOpacity>
              <Text className="text-xl font-medium text-left">Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* list introduce */}
        <View className="ml-5 mt-5 mr-5 flex-col flex-initial min-h-fit">
          <View>
            <Text className="text-xl font-bold text-left pt-5 pb-5 border-b-2 border-zinc-300 border-solid">
              Danh Mục Món Ăn
            </Text>
            <Text className="text-xl font-bold text-left pt-5 pb-5 border-b-2 border-zinc-300 border-solid">
              Về KFC
            </Text>
            <Text className="text-xl font-bold text-left pt-5 pb-5 border-b-2 border-zinc-300 border-solid">
              Liên hệ KFC
            </Text>
            <Text className="text-xl font-bold text-left pt-5 pb-5 border-b-2 border-zinc-300 border-solid">
              Chính sách
            </Text>
          </View>
        </View>

        {/* social */}
        <View className="bg-black h-2/5 items-center">
          <Text className="text-2xl font-bold text-left pt-5 pb-5 text-gray-300">
            Kết nối với KFC
          </Text>
          <View className="flex-row gap-5">
            <TouchableOpacity>
              <Text className="text-xl font-medium text-center text-gray-300 w-16 h-w-16 border-2 border-zinc-300 rounded-full">
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-xl font-medium text-center text-gray-300 w-16 h-w-16 border-2 border-zinc-300 rounded-full">
                abcbabab
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-xl font-medium text-center text-gray-300 w-16 h-w-16 border-2 border-zinc-300 rounded-full">
                abcbabcaba
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-xs font-normal text-center mt-16 text-gray-300 border-t-2 border-zinc-300 border-solid w-5/6 p-8">
            Copy right 2023 KFC Viet Nam
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default More;
