import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView>
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
      <Text className="text-3xl mt-5 font-bold">Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
