import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import * as Location from "expo-location";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from "../../components/Header";
import { Alert } from "react-native";

//https://api.geoapify.com/v1/geocode/reverse?lat=21.039005&lon=105.832113&apiKey=6e806f79046440a0897e1b732fcaaeb5
const Home = ({ navigation }) => {
  const setCartData = async (data) => {
    try {
      let cart = await AsyncStorage.getItem("cartData");
      cart = cart ? JSON.parse(cart) : [];
  
      const existingItemIndex = cart.findIndex(item => item.name === data.name);
  
      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart = [...cart, { ...data, quantity: 1 }];
      }
  
      await AsyncStorage.setItem("cartData", JSON.stringify(cart));
  
      Alert.alert("Thêm món ăn thành công");
  
    } catch (e) {
      console.log("Lỗi lưu data local: " + e.message);
    }
  };
  const listImgCarousel = [
    require("../../assets/banner/banner_1.png"),
    require("../../assets/banner/banner_2.jpg"),
    require("../../assets/banner/banner_3.jpg"),
    require("../../assets/banner/banner_4.jpg"),
    require("../../assets/banner/banner_5.jpg"),
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

  let [lstFoodLike, setLstFoodLike] = useState([
    {
      id: 1,
      name: "Combo Nhóm 1",
      description:
        "3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Phi-lê Gà Quay + 2 Lon Pepsi",
      price: 172000,
      image: "https://static.kfcvietnam.com.vn/images/items/lg/D6.jpg?v=LRz97L",
    },
    {
      id: 2,
      name: "Combo Nhóm 2",
      description:
        "4 Miếng Gà  + 1 Khoai tây chiên lớn / 2 Thanh Bí Phô-mai + 2 Pepsi Lon",
      price: 191000,
      image:
        "https://static.kfcvietnam.com.vn/images/items/lg/D7-new.jpg?v=LRz97L",
    },
    {
      id: 3,
      name: "Combo Nhóm 3",
      price: 228000,
      description:
        "5 Miếng Gà + 1 Popcorn (Vừa) / 4 Gà Miếng Nuggets+ 2 Pepsi Lon",
      image:
        "https://static.kfcvietnam.com.vn/images/items/lg/D8-new.jpg?v=LRz97L",
    },
  ]);

  const flatListRef = useRef(null);
  const [isEndReached, setIsEndReached] = useState(false);

  const loadMoreData = () => {
    // Append the list to itself to simulate adding more data
    setLstFoodLike([...lstFoodLike, ...lstFoodLike]);
    setIsEndReached(false);
  };

  const handleEndReached = () => {
    // if (lstFoodLike.length > 9) {
    //   setLstFoodLike((prevList) => prevList.slice(5));
    // }
    if (!isEndReached) {
      setIsEndReached(true);
      loadMoreData();
    }
  };

  // slice banner
  useEffect(() => {
    const timer = setTimeout(() => {
      if (indexCurrentCarousel + 1 > listImgCarousel.length - 1)
        setIndexCurrentCarousel(0);
      else setIndexCurrentCarousel(indexCurrentCarousel + 1);
    }, 3500);

    return () => clearTimeout(timer);
  }, [indexCurrentCarousel]);

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
      <ScrollView className="">
        {/* Header */}
        <Header/>
        {/* Banner */}
        <View>
          <View className="relative h-[300px]">
            <View className="absolute top-0 left-0 w-full b-0">
              <Image
                source={listImgCarousel[indexCurrentCarousel]}
                style={{ width: "100%", height: 300 }}
                resizeMode="contain"
              />
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
          <View className="flex-row flex-wrap justify-between gap-y-2">
            {lstItemFood.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="h-[200px] w-[49%] pb-10 bg-white rounded-md"
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [
                      { name: "Menu", params: { index: index, data: "ok" } },
                    ],
                  });
                }}
              >
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: "99%",
                      height: "99%",
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  />
                </View>
                <View className="pl-[1px] w-full absolute bottom-3 flex-row justify-start items-center">
                  <Text className="text-[14px] font-bold">{item.name}</Text>
                  <Entypo
                    name="chevron-right"
                    size={20}
                    color="black"
                    style={{ paddingTop: 2 }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* list user like */}
        <View className="px-2 flex-row flex-wrap justify-between gap-y-2 mt-5">
          <View className="h-20 gap-x-2 w-100% flex-row items-center mb-5">
            <View className="">
              <Image
                source={require("../../assets/logo_human.png")}
                style={{ width: 80, height: "100%" }}
              />
            </View>
            <Text className="text-[30px] font-bold w-[75%]">
              CÓ THỂ BẠN SẼ THÍCH MÓN NÀY
            </Text>
          </View>
          <View>
            <FlatList
              ref={flatListRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              onEndReached={handleEndReached}
              onEndReachedThreshold={0.8}
              data={lstFoodLike}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View
                  key={index}
                  className="h-[400px] w-[300px] pb-10 shadow-[-1px_4px_5px_1px_rgba(0,0,0,1)] bg-white rounded-md mr-5"
                >
                  <View>
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: "100%", height: "80%", borderRadius: 4 }}
                    />
                  </View>
                  <View className="px-4 w-full absolute bottom-[14px] items-center">
                    <View className="flex-row justify-between items-center w-full pb-2">
                      <Text className="text-[18px] font-bold">{item.name}</Text>
                      <Text className="text-[26px] font-bold">
                        {item.price}
                      </Text>
                    </View>
                    <Text className="font-light text-[14px]">
                      {item.description}
                    </Text>
                    <TouchableOpacity
                      className="bg-red-600 mt-6 w-full items-center py-[10px] rounded-full"
                      onPress={() => {
                        setCartData(item);
                      }}
                    >
                      <Text className="text-[18px] text-white">Thêm</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View className="h-40 w-full"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
