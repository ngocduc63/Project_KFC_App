import { NavigationContainer } from "@react-navigation/native";
import NavBar from "./components/NavBar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
