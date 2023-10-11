import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const listImgCarousel = [
    "https://static.kfcvietnam.com.vn/images/items/lg/happy_meal_social.jpg?v=4BoONg",
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/combo-dinner.jpg?v=3Qpl7g",
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Combo1010.jpg?v=LDoDO3",
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/KFC50.jpg?v=3Qpl7g",
    "https://static.kfcvietnam.com.vn/images/items/lg/happy_meal.jpg?v=4BoONg",
  ];

  let [indexCurrentCarousel, setIndexCurrentCarousel] = useState(0);

//   setTimeout(() => {
//     if (indexCurrentCarousel + 1 > listImgCarousel.length - 1)
//       setIndexCurrentCarousel(0);
//     else setIndexCurrentCarousel(indexCurrentCarousel + 1);
//   }, 2500);

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
        <TouchableOpacity>
          <MaterialIcons name="account-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView className="mb-[60px]">
        {/*Header*/}
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
        {/* Carousel */}
        <View>
          <View className="relative h-[300px]">
            <View className="absolute top-0 left-0 w-full b-0">
              <Image
                source={{ uri: listImgCarousel[indexCurrentCarousel] }}
                style={{ width: "100%", height: 300 }}
              ></Image>
            </View>
            <TouchableOpacity
              className="absolute top-[120px] left-0 bg-slate-900/80 w-12 h-12 items-center justify-center rounded-xl"
              onPress={() => {
                if (indexCurrentCarousel - 1 < 0)
                  setIndexCurrentCarousel(listImgCarousel.length - 1);
                else setIndexCurrentCarousel(indexCurrentCarousel - 1);
              }}
            >
              <Entypo name="chevron-thin-left" size={36} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              className="absolute top-[120px] right-0 bg-slate-900/80 w-12 h-12 items-center justify-center rounded-xl"
              onPress={() => {
                if (indexCurrentCarousel + 1 > listImgCarousel.length - 1)
                  setIndexCurrentCarousel(0);
                else setIndexCurrentCarousel(indexCurrentCarousel + 1);
              }}
            >
              <Entypo
                name="chevron-thin-right"
                size={36}
                color="white"
                style={{}}
              />
            </TouchableOpacity>
            {console.log(indexCurrentCarousel)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
