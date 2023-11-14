import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ItemDetail = ({navigation}) => {
  const route = useRoute();
  const data = route.params.data;
  return (
    <SafeAreaView>
      <TouchableOpacity
      onPress={() => navigation.navigate("ViewMenu")}
      >
        <Text>Quay lại</Text>
      </TouchableOpacity>
      <Text>{data.name}</Text>
    </SafeAreaView>
  );
};

export default ItemDetail;
