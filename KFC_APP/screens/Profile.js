import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const YourComponent = () => {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
};

const FirstRoute = ({ navigation }) => (
  <View className="">
    <View className="mt-3 mx-2">
      <View className="bg-white mx-5 rounded-lg mt-1 px-5 mb-80">
        <Text className="text-3xl font-bold pt-5">Bắt Đầu Đặt Món!</Text>
        <TouchableOpacity
          className="mt-3 bg-red-600 w-2/3 justify-center items-center py-3 rounded-full"
          onPress={() => navigation.navigate("Menu")}
        >
          <Text className="text-white font-semibold">Bắt Đầu Đặt Hàng</Text>
        </TouchableOpacity>
        <View className="w-2/3 h-[50%] mt-5 ml-10">
          <Image
            source={require("../assets/logo_cart.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  </View>
);

const SecondRoute = ({ navigation, data }) => (
  <View>
    <View className="mt-3 px-2">
      <Text className="font-bold text-[28px] mb-2">CHI TIẾT TÀI KHOẢN</Text>
      <ScrollView className="mt-2 px-2 gap-y-2 h-[40%] ">
        <View>
          <Text className="text-xl font-bold text-left">Họ Tên*</Text>
          <View className="w-full border-b-[1px] border-zinc-500 h-8 rounded-xl justify-center items-center pl-3">
            <TextInput
              style={{ width: "100%", fontSize: 20 }}
              keyboardType="default"
              placeholder="Nhập họ tên của bạn"
              selectionColor={"red"}
              autoCapitalize="none"
              value={data.name}
            />
          </View>
        </View>
        <View>
          <Text className="text-xl font-bold text-left">Số Điện Thoại*</Text>
          <View className="w-full border-b-[1px] border-zinc-500 h-8 rounded-xl justify-center items-center pl-3">
            <TextInput
              style={{ width: "100%", fontSize: 20 }}
              keyboardType="number-pad"
              placeholder="Nhập số điện thoại"
              selectionColor={"red"}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View>
          <Text className="text-xl font-bold text-left">Nhập email*</Text>
          <View className="w-full border-b-[1px] border-zinc-500 h-8 rounded-xl justify-center items-center pl-3">
            <TextInput
              style={{ width: "100%", fontSize: 20 }}
              keyboardType="email-address"
              placeholder="Nhập email của bạn"
              selectionColor={"red"}
              autoCapitalize="none"
              value={data.userName}
            />
          </View>
        </View>
      </ScrollView>
      <View className="items-center mt-3">
        <TouchableOpacity
          className="w-[300px] bg-red-600 items-center py-3 rounded-full"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="font-bold text-white text-lg">
            Cập nhật tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const ThreeRoute = ({ navigation }) => (
  <View>
    <View className="mt-3 px-2">
      <Text className="font-bold text-[28px] mb-2">CHI TIẾT TÀI KHOẢN</Text>
      <ScrollView className="mt-2 px-2 gap-y-2 h-[40%] ">
        <View>
          <Text className="text-xl font-bold text-left">Nhập mật khẩu cũ*</Text>
          <View className="w-full border-b-[1px] border-zinc-500 h-8 rounded-xl justify-between items-center flex-row px-8">
            <TextInput
              style={{ width: "100%", fontSize: 20, marginLeft: -16 }}
              placeholder="Nhập mật khẩu cũ của bạn"
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <TouchableOpacity
            // onPress={() => {
            //   setIsShowPassWord(!isShowPassWord);
            // }}
            >
              {/* {isShowPassWord === true ? (
                  <Entypo name="eye-with-line" size={24} color="black" />
                ) : (
                  <Entypo name="eye" size={24} color="black" />
                )} */}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text className="text-xl font-bold text-left">
            Nhập mật khẩu mới*
          </Text>
          <View className="w-full border-b-[1px] border-zinc-500 h-8 rounded-xl justify-between items-center flex-row px-8">
            <TextInput
              style={{ width: "100%", fontSize: 20, marginLeft: -16 }}
              placeholder="Nhập mật khẩu mới của bạn"
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <TouchableOpacity
            // onPress={() => {
            //   setIsShowPassWord(!isShowPassWord);
            // }}
            >
              {/* {isShowPassWord === true ? (
                  <Entypo name="eye-with-line" size={24} color="black" />
                ) : (
                  <Entypo name="eye" size={24} color="black" />
                )} */}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text className="text-xl font-bold text-left">
            Nhập lại mật khẩu mới*
          </Text>
          <View className="w-full border-b-[1px] border-zinc-500 h-8 rounded-xl justify-between items-center flex-row px-8">
            <TextInput
              style={{ width: "100%", fontSize: 20, marginLeft: -16 }}
              placeholder="Nhập mật khẩu mới của bạn"
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <TouchableOpacity
            // onPress={() => {
            //   setIsShowPassWord(!isShowPassWord);
            // }}
            >
              {/* {isShowPassWord === true ? (
                  <Entypo name="eye-with-line" size={24} color="black" />
                ) : (
                  <Entypo name="eye" size={24} color="black" />
                )} */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View className="items-center mt-3">
        <TouchableOpacity
          className="w-[300px] bg-red-600 items-center py-3 rounded-full"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="font-bold text-white text-lg">
            Cập nhật tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

// const renderScene =

const Profile = ({ navigation }) => {
  const [nameData, SetNameData] = useState(null);
  const [userNameData, SetUserNameData] = useState(null);
  const [isLogin, SetIsLogin] = useState(false);

  const setLogin = async () => {
    try {
      await AsyncStorage.setItem("isLogin", "false");
    } catch (e) {
      console.log("Lỗi lưu data local: ");
    }
  };

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem("name");
      const userName = await AsyncStorage.getItem("userName");
      const login = await AsyncStorage.getItem("isLogin");

      SetUserNameData(userName);
      SetNameData(name);
      SetIsLogin(login);
    } catch (e) {
      console.log("Lỗi load data local: " + e.message);
    }
  };
  getData();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    { key: "first", title: "Đơn hàng đã mua" },
    { key: "second", title: "Chi tiết tài khoản" },
    { key: "three", title: "Đổi mật khẩu" },
  ]);

  return (
    <SafeAreaView>
      <View>
        {/* Header */}
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
        {/*Content logout*/}
        {!isKeyboardVisible && (
          <View className="h-[200px] bg-black flex-row items-center">
            <View className="h-28 w-28">
              <Image
                source={require("../assets/logo_human.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            {isLogin && (
              <View className="h-30 w-[70%] ml-5">
                <Text className="text-white font-bold text-2xl pr-3">
                  XIN CHÀO, {nameData}
                </Text>
                <TouchableOpacity
                  className="mt-5"
                  onPress={() => {
                    setLogin();
                    Alert.alert("Đăng xuất thành công");
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "Fisrt" }],
                    });
                  }}
                >
                  <Text className="text-white underline font-semibold text-lg">
                    Đăng xuất
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            {(!isLogin || isLogin == null) && (
              <View className="h-30 w-[70%] ml-5">
                <Text className="text-white font-bold text-2xl pr-3">
                  Vui Lòng Đăng Nhập!
                </Text>
                <TouchableOpacity
                  className="mt-5"
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text className="text-white underline font-semibold text-xl">
                    Đăng nhập
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        {/* Tab content */}
        {isLogin === "true" && (
          <View className="h-full">
            <TabView
              navigationState={{ index, routes }}
              renderScene={({ route }) => {
                if (route.key === "first") {
                  return <FirstRoute navigation={navigation} />;
                } else if (route.key === "second") {
                  return (
                    <SecondRoute
                      navigation={navigation}
                      data={{ name: nameData, userName: userNameData }}
                    />
                  );
                } else if (route.key === "three") {
                  return <ThreeRoute navigation={navigation} />;
                }
              }}
              onIndexChange={setIndex}
              renderTabBar={(props) => (
                <TabBar
                  {...props}
                  style={{ backgroundColor: "black" }}
                  indicatorStyle={{ backgroundColor: "red" }}
                  labelStyle={{ fontSize: 10 }}
                />
              )}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
