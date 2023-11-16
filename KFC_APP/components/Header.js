import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  let [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(0);
  const [addressData, setAddressData] = useState(null);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("address", value);
    } catch (e) {
      console.log("Lỗi lưu data local: " );
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("address");
      if (value !== null) {
        setAddressData(value);
      }
    } catch (e) {
      console.log("Lỗi load data local: " + e.message);
    }
  };
  getData();

  

  const getLocation = async () => {
    setIsLoading(1);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log(location);
  };

  useEffect(() => {
    console.log("effect");
    // You can run any code you want here that should be triggered when the button is clicked.
    const fetchData = async () => {
     console.log("Find location");
      try {
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;

        console.log("latitude " + latitude);

        const apiKey = "6e806f79046440a0897e1b732fcaaeb5";

        const response = await fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`
        );

        if (response) {
          const data = await response.json();
          let dataAdd = data.features[0].properties.formatted;
          const parts = dataAdd.split(",");
          const cleanedAddress = parts.slice(0, -2).join(",");
          setAddressData(cleanedAddress);
          storeData(addressData);
          setIsLoading(2);
        } else {
          console.error("Failed to fetch data from the API");
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    if (location) fetchData();
  }, [location]);

  return (
    <View>
      {/*Header*/}
      {addressData === null && (
        <View className="h-36 bg-gray-800 items-center justify-center pb-5">
          <Text className="text-[16px] text-slate-50 font-semibold pb-5">
            Đặt ngay{"  "}
            <Image
              source={require("../assets/delivery.png")}
              style={{ width: 50, height: 50 }}
            />{" "}
            Giao hàng{" "}
            <Image
              source={require("../assets/bag_take_away.png")}
              style={{ width: 50, height: 50 }}
            />{" "}
            Hoặc mang đi
          </Text>
          <TouchableOpacity
            className="bg-red-700 justify-center items-center h-[50px] px-20 rounded-full"
            onPress={getLocation}
            disabled={isLoading !== 0}
          >
            {isLoading === 0 && (
              <Text className="text-[16px] text-slate-50 font-semibold">
                {" "}
                Bắt đầu đặt hàng
              </Text>
            )}
            {isLoading !== 0 && (
              <Text className="text-[16px] text-slate-50 font-semibold">
                {" "}
                Đang định vị...
              </Text>
            )}
          </TouchableOpacity>
        </View>
      )}
      {addressData && (
        <View className="h-36 bg-gray-800 items-center justify-around pb-5">
          <Text className="text-white text-[16px] font-semibold px-5">
            Vị trí của bạn: {addressData}
          </Text>
          <TouchableOpacity
            className="bg-red-700 justify-center items-center h-[50px] px-20 rounded-full"
            onPress={getLocation}
            disabled={isLoading === 1}
          >
            {isLoading !== 1 && (
              <Text className="text-[16px] text-slate-50 font-semibold">
                {" "}
                Thay đổi vị trí
              </Text>
            )}
            {isLoading === 1 && (
              <Text className="text-[16px] text-slate-50 font-semibold">
                {" "}
                Đang định vị...
              </Text>
            )}
          </TouchableOpacity>
        </View>
      )}
      
    </View>
  );
};

export default Header;
