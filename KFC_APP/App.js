import { NavigationContainer } from "@react-navigation/native";
import NavBar from "./components/NavBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const storeData = async (userName, passWord) => {
    try {
      await AsyncStorage.setItem("userName", userName);
      await AsyncStorage.setItem("passWord", passWord);
      await AsyncStorage.setItem("isLogin", "false");
      await AsyncStorage.setItem("cartData", JSON.stringify([]));
    } catch (e) {
      console.log("Lỗi lưu data local: ");
    }
  };

  storeData("admin", "123");

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
