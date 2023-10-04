import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Form Register</Text>
      <TouchableOpacity onPress={() => navigation.navigate("More")}>
        <Text className="text-3xl">{"<="} back </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
