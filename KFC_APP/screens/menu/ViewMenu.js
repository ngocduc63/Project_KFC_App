import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import MenuItem from "../../components/menu/MenuItem";

const ViewMenu = ({ navigation }) => {
  const route = useRoute();
  const params = route.params;
  const flatListRef = useRef();
  const flatItemRef = useRef();
  useEffect(() => {
    if (params) {
      setIndexCurrentItem(params.index);
      flatListRef.current.scrollToIndex({
        animated: true,
        index: params.index,
      });
    }
    if (params) {
      setIndexCurrentItem(params.index);
      flatItemRef.current.scrollToIndex({
        animated: true,
        index: params.index,
      });
    }
  }, [params]);
  const scrollToHeaderIndex = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  };
  const scrollToListItemIndex = (index) => {
    if (flatItemRef.current) {
      flatItemRef.current.scrollToIndex({ index, animated: true });
    }
  };
  let [indexCurrentItem, setIndexCurrentItem] = useState(0);
  let [indexCurrentListItem, setIndexCurrentListItem] = useState(0);
  let [lstItemFood, setLstItemFood] = useState([
    {
      id: 1,
      name: "Món Mới",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/MON%20MOI.jpg?v=mLKQng",
      data: [
        {
          id: 1,
          name: "1 Gà Que Kem Xốt Cajun",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/1-Cajun.jpg?v=LK8no4",
          newPrice: 40000,
          price: 97000,
          description: "1 Gà Que Kem Xốt Cajun",
          timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 2,
          name: "2 Gà Que Kem Xốt Cajun",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/2-Cajun.jpg?v=LK8no4",
          newPrice: 74000,
          //price: 97.000,
          description: "2 Gà Que Kem Xốt Cajun",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 3,
          name: "Combo Gà Que Kem Xốt Cajun A",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/A-Cajun.jpg?v=LK8no4",
          newPrice: 91000,
          //price: 97.000,
          description: "1 Gà Que Kem Xốt Cajun + 1 Burger + 1 Pepsi Lon",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 4,
          name: "Combo Gà Que Kem Xốt Cajun B",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/B-Cajun.jpg?v=LK8no4",
          newPrice: 89000,
          //price: 97.000,
          description: "1 Gà Que Kem Xốt Cajun + 1 Miếng Gà + 1 Pepsi Lon",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 5,
          name: "Pepsi Không Calo Lon",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/pepsi-zero.jpg?v=LK8no4",
          newPrice: 17000,
          //price: 97.000,
          description: "Pepsi Không Calo Lon",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 6,
          name: "Combo Gà Zero HD",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/combo-pepsi-zero.jpg?v=LK8no4",
          newPrice: 96000,
          //price: 97.000,
          description:
            "02 Miếng Gà Rán + 02 Gà Miếng Nuggets + 01 Pepsi Không Calo Lon",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
      ],
    },
    {
      id: 2,
      name: "Combo 1 Người",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/COMBO%201%20NGUOI.jpg?v=mLKQng",
      data: [
        {
          id: 1,
          name: "Combo Gà Rán",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/D1-new.jpg?v=LK8no4",
          newPrice: 87000,
          //price: 97.000,
          description:
            "2 Miếng Gà +1 Khoai tây chiên vừa / 2 Gà Miếng Nuggets + 1 Lipton vừa",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 2,
          name: "Combo Mì Ý",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/D3-new.jpg?v=LK8no4",
          newPrice: 87000,
          //price: 97.000,
          description: "1 Mì Ý Xốt Cà Gà Viên + 1 Miếng Gà+ 1 Lon Pepsi Can",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 3,
          name: "COMBO SALAD HẠT",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/D4-new.jpg?v=LK8no4",
          newPrice: 78000,
          //price: 97.000,
          description: "1 Miếng Gà + 1 Salad Hạt + 1 Lon Pepsi",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 4,
          name: "Combo Burger",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/D5.jpg?v=LK8no4",
          newPrice: 89000,
          //price: 97.000,
          description:
            "1 Burger Zinger/Burger Gà Quay Flava/Burger Tôm + 1 Miếng Gà Rán + 1 Lon Pepsi",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
      ],
    },
    {
      id: 3,
      name: "Combo Nhóm",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/COMBO%20NHOM.jpg?v=mLKQng",
      data: [
        {
          id: 1,
          name: "Combo Nhóm 1",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/D6.jpg?v=LRz97L",
          newPrice: 172000,
          //price: 97.000,
          description:
            "3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Phi-lê Gà Quay + 2 Lon Pepsi",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 2,
          name: "Combo Nhóm 2",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/D7-new.jpg?v=LK8no4",
          newPrice: 191000,
          //price: 97.000,
          description:
            "4 Miếng Gà + 1 Khoai tây chiên lớn / 2 Thanh Bí Phô-mai + 2 Pepsi Lon",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 3,
          name: "Combo Nhóm 3",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/D8-new.jpg?v=LK8no4",
          newPrice: 228000,
          //price: 97.000,
          description:
            "5 Miếng Gà + 1 Popcorn (Vừa) / 4 Gà Miếng Nuggets+ 2 Pepsi Lon",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
      ],
    },
    {
      id: 4,
      name: "Gà Rán - Gà Quay",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/GA.jpg?v=mLKQng",
      data: [
        {
          id: 1,
          name: "1 Miếng Gà Rán",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/1-Fried-Chicken.jpg?v=LK8no4",
          newPrice: 172000,
          //price: 97.000,
          description: "1 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 2,
          name: "2 Miếng Gà Rán",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/2-Fried-Chicken.jpg?v=LK8no4",
          newPrice: 30000,
          //price: 97.000,
          description: "2 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 3,
          name: "3 Miếng Gà Rán",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/3-Fried-Chicken.jpg?v=LK8no4",
          newPrice: 103.0,
          //price: 97.000,
          description: "3 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 4,
          name: "6 Miếng Gà Rán",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/6-Fried-Chicken.jpg?v=LK8no4",
          newPrice: 201000,
          //price: 97.000,
          description: "6 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 5,
          name: "1 Miếng Đùi Gà Quay",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/BJ.jpg?v=LK8no4",
          newPrice: 201000,
          //price: 97.000,
          description: "1 Miếng Đùi Gà Quay Giấy Bạc/Đùi Gà Quay Tiêu",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 6,
          name: "1 Miếng Phi-lê Gà Quay",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/MOD-PHI-LE-GA-QUAY.jpg?v=LK8no4",
          newPrice: 74000,
          //price: 97.000,
          description: "1 Miếng Phi-lê Gà Quay Flava/Phi-lê Gà Quay Tiêu",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 7,
          name: "3 Cánh Gà Hot Wings",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/3-HW.jpg?v=LK8no4",
          newPrice: 54000,
          //price: 97.000,
          description: "3 Cánh Gà Hot Wings",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 8,
          name: "5 Cánh Gà Hot Wings",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/5-HW.jpg?v=LK8no4",
          newPrice: 83000,
          //price: 97.000,
          description: "5 Cánh Gà Hot Wings",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 9,
          name: "Gà Viên (Vừa)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/3-HW.jpg?v=LK8no4",
          newPrice: 38000,
          //price: 97.000,
          description: "Gà Viên (Vừa)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 10,
          name: "Gà Viên (Lớn)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/POP-R.jpg?v=LK8no4",
          newPrice: 63000,
          //price: 97.000,
          description: "Gà Viên (Lớn))",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 11,
          name: "3 Gà Miếng Nuggets",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/POP-L.jpg?v=LK8no4",
          newPrice: 27000,
          //price: 97.000,
          description: "3 Gà Miếng Nuggets",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 12,
          name: "5 Gà Miếng Nuggets",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/5_Nuggests.jpg?v=LK8no4",
          newPrice: 40000,
          //price: 97.000,
          description: "5 Gà Miếng Nuggets",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 13,
          name: "10 Gà Miếng Nuggets",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/10_Nuggests.jpg?v=LK8no4",
          newPrice: 70000,
          //price: 97.000,
          description: "10 Gà Miếng Nuggets",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
      ],
    },
    {
      id: 5,
      name: "Burger - Cơm - Mì Ý",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/COM.jpg?v=mLKQng",
      data: [
        {
          id: 1,
          name: "Burger Zinger",
          image:
            "1)	https://static.kfcvietnam.com.vn/images/items/lg/burger-zinger.jpg?v=lk8no4",
          newPrice: 54000,
          //price: 97.000,
          description: "Burger Zinger",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 2,
          name: "Burger Tôm",
          image:
            "2)	https://static.kfcvietnam.com.vn/images/items/lg/burger-shrimp.jpg?v=lk8no4",
          newPrice: 44000,
          //price: 97.000,
          description: "Burger Tôm",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 3,
          name: "Burger Gà Quay Flava",
          image:
            "	https://static.kfcvietnam.com.vn/images/items/lg/burger-flava.jpg?v=lk8no4",
          newPrice: 54000,
          //price: 97.000,
          description: "Burger Gà Quay Flava",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 4,
          name: "Cơm Gà Xiên Que",
          image:
            "4)	https://static.kfcvietnam.com.vn/images/items/lg/rice-skewer.jpg?v=lk8no4",
          newPrice: 45000,
          //price: 97.000,
          description: "Cơm Gà Xiên Que",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 5,
          name: "Cơm Xiên Gà Tenderods",
          image:
            "5)	https://static.kfcvietnam.com.vn/images/items/lg/rice-tenderods.jpg?v=lk8no4",
          newPrice: 45000,
          //price: 97.000,
          description: "Cơm Xiên Gà Tenderods",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 6,
          name: "Cơm Gà Teriyaki",
          image:
            "6)	https://static.kfcvietnam.com.vn/images/items/lg/rice-teriyaki.jpg?v=lk8no4",
          newPrice: 45000,
          //price: 97.000,
          description: "Cơm Gà Teriyaki",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 7,
          name: "Cơm Gà Bít-tết",
          image:
            "	https://static.kfcvietnam.com.vn/images/items/lg/Rice-Steak.jpg?v=LKwy9L",
          newPrice: 45000,
          //price: 97.000,
          description: "Cơm Gà Bít-tết",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 8,
          name: "MÌ Ý XỐT CÀ XÚC XÍCH GÀ VIÊN",
          image:
            "8)	https://static.kfcvietnam.com.vn/images/items/lg/MY-Y-POP.jpg?v=LKwy9L",
          newPrice: 40000,
          //price: 97.000,
          description: "MÌ Ý XỐT CÀ XÚC XÍCH GÀ VIÊN",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 9,
          name: "Mì Ý Xốt Cà Xúc Xích Gà Zinger",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/MY-Y-ZINGER.jpg?v=LKwy9L",
          newPrice: 60000,
          //price: 97.000,
          description: "Mì Ý Xốt Cà Xúc Xích Gà Zinger)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 10,
          name: "Cơm Gà Rán",
          image:
            "10)	https://static.kfcvietnam.com.vn/images/items/lg/Rice-F.Chicken.jpg?v=LKwy9L",
          newPrice: 45000,
          //price: 97.000,
          description: "Cơm Gà Rán",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 11,
          name: "CƠM PHI-LÊ GÀ QUAY",
          image:
            "11)	https://static.kfcvietnam.com.vn/images/items/lg/rice-flava.jpg?v=lk8no4",
          newPrice: 45000,
          //price: 97.000,
          description: "CƠM PHI-LÊ GÀ QUAY",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 12,
          name: "Cơm",
          image:
            "12)	https://static.kfcvietnam.com.vn/images/items/lg/rice.jpg?v=lk8no4",
          newPrice: 10000,
          //price: 97.000,
          description: "Cơm",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
      ],
    },
    {
      id: 6,
      name: "Thức Ăn Nhẹ",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/MON%20AN%20NHE.jpg?v=mLKQng",
      data: [
        {
          id: 1,
          name: "Salad Hạt",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/SALAD-HAT.jpg?v=LKwy9L",
          newPrice: 35000,
          //price: 97.000,
          description: "Salad Hạt",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 2,
          name: "Salad Pop",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/SALAD-HAT-GA-VIEN.jpg?v=LKwy9L",
          newPrice: 38000,
          //price: 97.000,
          description: "Salad Pop",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 3,
          name: "3 Cá Thanh",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/3-Fishsticks.jpg?v=LKwy9L",
          newPrice: 40000,
          //price: 97.000,
          description: "3 Cá Thanh",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 4,
          name: " Xiên Que",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/2-Skewers.jpg?v=LKwy9L",
          newPrice: 40000,
          //price: 97.000,
          description: " Xiên Que",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 5,
          name: "2 Xiên Tenderods",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/2-Tenderods.jpg?v=LKwy9L",
          newPrice: 40000,
          //price: 97.000,
          description: "2 Xiên Tenderods      ",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 6,
          name: "4 Phô Mai Viên",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/4-Chewy-Cheese.jpg?v=LKwy9L",
          newPrice: 34000,
          //price: 97.000,
          description: "4 Phô Mai Viên",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 7,
          name: "6 Phô Mai Viên",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/6-Chewy-Cheese.jpg?v=LKwy9L",
          newPrice: 45000,
          //price: 97.000,
          description: "6 Phô Mai Viên",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 8,
          name: "KHOAI TÂY CHIÊN (VỪA))",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/FF-R.jpg?v=LKwy9L",
          newPrice: 19000,
          //price: 97.000,
          description: "KHOAI TÂY CHIÊN (VỪA)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 9,
          name: "KHOAI TÂY CHIÊN (LỚN",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/FF-L.jpg?v=LKwy9L",
          newPrice: 28000,
          //price: 97.000,
          description: "KHOAI TÂY CHIÊN (LỚN)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 10,
          name: "KHOAI TÂY CHIÊN (ĐẠI)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/FF-J.jpg?v=LKwy9L",
          newPrice: 38000,
          //price: 97.000,
          description: "KHOAI TÂY CHIÊN (ĐẠI)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 11,
          name: "Khoai Tây Nghiền (Vừa)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/MP-(R)-new.jpg?v=LKwy9L",
          newPrice: 12000,
          //price: 97.000,
          description: "Khoai Tây Nghiền (Vừa)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 12,
          name: "Khoai Tây Nghiền (LỚN)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/MP-(L)-new.jpg?v=LKwy9L",
          newPrice: 22000,
          //price: 97.000,
          description: "Khoai Tây Nghiền (LỚN)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 13,
          name: "Khoai Tây Nghiền (ĐẠI)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/MP-(J)-new.jpg?v=LKwy9L",
          newPrice: 28000,
          //price: 97.000,
          description: "Khoai Tây Nghiền (ĐẠI)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 14,
          name: "Bắp Cải Trộn (Vừa)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/CL-(R)-new.jpg?v=LKwy9L",
          newPrice: 12000,
          //price: 97.000,
          description: "Bắp Cải Trộn (Vừa)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 15,
          name: "Bắp Cải Trộn (Lớn)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/CL-(L)-new.jpg?v=LKwy9L",
          newPrice: 22000,
          //price: 97.000,
          description: "Bắp Cải Trộn (Lớn)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 16,
          name: "Bắp Cải Trộn (Đại)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/CL-(J)-new.jpg?v=LKwy9L",
          newPrice: 31000,
          //price: 97.000,
          description: "Bắp Cải Trộn (Đại)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 17,
          name: "Súp Rong Biển",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/Soup-Rong-Bien.jpg?v=LKwy9L",
          newPrice: 17000,
          //price: 97.000,
          description: "Súp Rong Biển",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
      ],
    },
    {
      id: 7,
      name: "Thức Uống & Tráng Miệng",
      image:
        "https://static.kfcvietnam.com.vn/images/category/lg/TRANG%20MIENG.jpg?v=mLKQng",
      data: [
        {
          id: 1,
          name: "1 Bánh Trứng",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/1-eggtart.jpg?v=LKwy9L",
          newPrice: 18000,
          //price: 97.000,
          description: "1 Bánh Trứng ",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 2,
          name: "4 Bánh Trứng  ",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/4-eggtart.jpg?v=LKwy9L",
          newPrice: 58000,
          //price: 97.000,
          description: "4 Bánh Trứng",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 3,
          name: "2 Viên Khoai Môn Kim Sa",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/2-taro.jpg?v=LKwy9L",
          newPrice: 26000,
          //price: 97.000,
          description: "2 Viên Khoai Môn Kim Sa",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 4,
          name: " 3 Viên Khoai Môn Kim Sa",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/3-taro.jpg?v=LKwy9L",
          //price: 97.000,
          description: "3 Viên Khoai Môn Kim Sa",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 5,
          name: "5 Viên Khoai Môn Kim Sa      ",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/5-taro.jpg?v=LKwy9L",
          newPrice: 54000,
          //price: 97.000,
          description: "5 Viên Khoai Môn Kim Sa ",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 6,
          name: "2 Thanh Bí Phô Mai",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/2-Pumcheese.jpg?v=LKwy9L",
          newPrice: 28000,
          //price: 97.000,
          description: "2 Thanh Bí Phô Mai",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 7,
          name: "3 Thanh Bí Phô Mai",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/3-Pumcheese.jpg?v=LKwy9L",
          newPrice: 38000,
          //price: 97.000,
          description: "3 Thanh Bí Phô Mai",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 8,
          name: "5 Thanh Bí Phô Mai",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/5-Pumcheese.jpg?v=LKwy9L",
          newPrice: 58000,
          //price: 97.000,
          description: "5 Thanh Bí Phô Mai",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 9,
          name: "Pepsi Lon",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/Pepsi-Can.jpg?v=LKwy9L",
          newPrice: 17000,
          //price: 97.000,
          description: "Pepsi Lon",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 10,
          name: "7up lon",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/7Up-Can.jpg?v=LKwy9L",
          newPrice: 17000,
          //price: 97.000,
          description: "7up lon",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 11,
          name: "Aquafina 500ml      ",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/Aquafina-500ml.jpg?v=LKwy9L",
          newPrice: 15000,
          //price: 97.000,
          description: "Aquafina 500ml      ",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 12,
          name: "Trà Đào",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/Peach-Tea.jpg?v=LKwy9L",
          newPrice: 24000,
          //price: 97.000,
          description: "Trà Đào",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 13,
          name: "Milo hộp",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/milo-box-hd.jpg?v=LKwy9L",
          newPrice: 20000,
          //price: 97.000,
          description: "Milo hộp",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 14,
          name: "TRÀ CHANH LIPTON (Lớn)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/Lipton.jpg?v=LKwy9L",
          newPrice: 17000,
          //price: 97.000,
          description: "TRÀ CHANH LIPTON (lớn)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
        {
          id: 15,
          name: "TRÀ CHANH LIPTON (Vừa)",
          image:
            "https://static.kfcvietnam.com.vn/images/items/lg/Lipton.jpg?v=LKwy9L",
          newPrice: 10000,
          //price: 97.000,
          description: "TRÀ CHANH LIPTON (Vừa)",
          //timeSell: "*Chỉ áp dụng từ 17:00 - 20:00",
        },
      ],
    },
  ]);
  return (
    <SafeAreaView>
      {/* set location */}
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
      {/* Header */}
      <View className="mt-3 border-b-[0.5px] border-gray-400 border-solid">
        <FlatList
          ref={flatListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={indexCurrentItem}
          data={lstItemFood}
          onScrollToIndexFailed={({ index }) => {
            flatListRef.current?.scrollToOffset({
              offset: index * 100,
              animated: true,
            });
            const wait = new Promise((resolve) => setTimeout(resolve, 200));
            wait.then(() => {
              flatListRef.current?.scrollToIndex({ index, animated: true });
            });
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              className="mr-5 pb-2"
              onPress={() => {
                setIndexCurrentItem(index);
                setIndexCurrentListItem(index);
                scrollToHeaderIndex(index);
                scrollToListItemIndex(index);
              }}
            >
              <View className="items-center">
                {index === indexCurrentItem && (
                  <View className="w-[80px] h-[80px] border-[2px] border-red-600 border-solid rounded-full absolute"></View>
                )}
                <View className="p-[3px] w-[80px] h-[80px]">
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: "100%", height: "100%", borderRadius: 200 }}
                  />
                </View>
                {index === indexCurrentItem && (
                  <Text className="text-center mt-4 font-bold">
                    {item.name}
                  </Text>
                )}

                {index !== indexCurrentItem && (
                  <Text className="text-center mt-4 font-bold text-gray-400">
                    {item.name}
                  </Text>
                )}
                {index === indexCurrentItem && (
                  <View className="border-b-[2px] border-red-600 border-solid w-full h-[10px] absolute -bottom-2"></View>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Content */}
      <FlatList
        ref={flatItemRef}
        data={lstItemFood}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        initialScrollIndex={indexCurrentListItem}
        onScrollToIndexFailed={({ index }) => {
          flatItemRef.current?.scrollToOffset({
            offset: index * 100,
            animated: true,
          });
          const wait = new Promise((resolve) => setTimeout(resolve, 200));
          wait.then(() => {
            flatItemRef.current?.scrollToIndex({ index, animated: true });
          });
        }}
        renderItem={({ item, index }) => (
          <View className="">
            <Text className="text-3xl font-bold my-2 ml-2">{item.name}</Text>
            <MenuItem data={item.data}></MenuItem>
            {index === lstItemFood.length - 1 && (
              <View className="h-[350px] w-full"></View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ViewMenu;
