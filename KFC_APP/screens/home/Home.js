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
    "https://scontent.fhan19-1.fna.fbcdn.net/v/t45.1600-4/380725736_23859076183490779_4895159868564330008_n.png?stp=cp0_dst-jpg_p526x296_q90_spS444&_nc_cat=111&ccb=1-7&_nc_sid=0fa913&_nc_ohc=pkJvAYwWI8oAX8y_dw5&_nc_ht=scontent.fhan19-1.fna&_nc_e2o=s&oh=00_AfBlysrxqxOU7DSp_kA0Mv2VKstvCjfBaSMI1k8cCoBrOQ&oe=652CD7A2",
  ];

  let [indexCurrentCarousel, setIndexCurrentCarousel] = useState(0);
  let [lstItemFood, setLstItemFood] = useState([
    {
      id: 1,
      name: "Món Mới",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/MON%20MOI.jpg?v=mLKQng",
    },
    {
      id: 2,
      name: "Combo 1 Người",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/COMBO%201%20NGUOI.jpg?v=mLKQng",
    },
    {
      id: 3,
      name: "Combo Nhóm",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/COMBO%20NHOM.jpg?v=mLKQng",
    },
    {
      id: 4,
      name: "Gà Rán - Gà Quay",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/GA.jpg?v=mLKQng",
    },
    {
      id: 5,
      name: "Burger - Cơm - Mì Ý",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/COM.jpg?v=mLKQng",
    },
    {
      id: 6,
      name: "Thức Ăn Nhẹ",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/MON%20AN%20NHE.jpg?v=mLKQng",
    },
    {
      id: 7,
      name: "Thức Uống & Tráng Miệng",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/TRANG%20MIENG.jpg?v=mLKQng",
    },
  ]);

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
      <ScrollView className="mb-[150px]">
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
              <Entypo name="chevron-thin-right" size={36} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu combo */}
        <View className="px-2 mt-10 flex-row flex-wrap justify-between gap-y-2">
          <View className="flex-row items-center h-12 gap-x-2 w-100%">
            <Text className="text-[22px] font-bold"> DANH MỤC MÓN ĂN</Text>
            <View className="w-[40%] h-[2px] bg-gray-700"></View>
          </View>
          <View className="flex-row flex-wrap justify-between gap-y-2 pb-16">
            {lstItemFood.map((item, index) => (
              <View
                key={index}
                className="h-[200px] w-[49%] relative pb-10 rounded-md"
              >
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: "99%", height: "99%" }}
                  />
                </View>
                <TouchableOpacity className="w-full absolute bottom-3 flex-row justify-start items-center gap-x-1">
                  <Text className="text-[14px] font-bold">{item.name}</Text>
                  <Entypo
                    name="chevron-right"
                    size={20}
                    color="black"
                    style={{ paddingTop: 2 }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
