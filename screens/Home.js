import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import images from "../constants/images";
import { COLORS, FONTS, SIZES } from "../constants/theme";

// new plant render
const renderNewPlants = (item, index) => {
  return (
    <View style={{ marginRight: 15 }} key={index}>
      <Image
        source={item.img}
        style={{
          width: SIZES.width * 0.25,
          height: "82%",
          borderRadius: 15,
        }}
        resizeMode="cover"
      />

      <View
        style={{
          position: "absolute",
          backgroundColor: COLORS.primary,
          bottom: 35,
          right: 0,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
      </View>

      {/* favourite */}
      <TouchableOpacity style={{ position: "absolute", right: 7, top: 7 }}>
        {item.favourite ? (
          <AntDesign name="heart" size={20} color={"red"} />
        ) : (
          <AntDesign name="hearto" size={20} color={COLORS.primary} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default function Home({ navigation }) {
  // new plant data
  const [newPlants, setNewPlants] = useState([
    {
      name: "Plant 1",
      img: images.plant1,
      favourite: false,
    },
    {
      name: "Plant 2",
      img: images.plant2,
      favourite: false,
    },
    {
      name: "Plant 3",
      img: images.plant3,
      favourite: true,
    },
    {
      name: "Plant 4",
      img: images.plant4,
      favourite: false,
    },
    {
      name: "Plant 5",
      img: images.plant5,
      favourite: false,
    },
    {
      name: "Plant 6",
      img: images.plant6,
      favourite: false,
    },
    {
      name: "Plant 7",
      img: images.plant7,
      favourite: false,
    },
    {
      name: "Plant 8",
      img: images.plant8,
      favourite: true,
    },
    {
      name: "Plant 9",
      img: images.plant9,
      favourite: false,
    },
  ]);

  return (
    <View style={styles.container}>
      {/* new plant */}
      <View
        style={{
          height: "30%",
          backgroundColor: COLORS.primary,
          paddingHorizontal: 15,
          paddingTop: 30,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <View
          style={{
            marginTop: SIZES.padding / 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>New Plants</Text>
            <TouchableOpacity>
              <MaterialIcons name="fullscreen" size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* new plant image */}
          <View style={{ marginTop: SIZES.padding / 4 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              data={newPlants}
              renderItem={({ item, index }) => renderNewPlants(item, index)}
            />
          </View>
        </View>
      </View>

      {/* today share */}
      <View style={{ height: "50%", backgroundColor: COLORS.lightGray }}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}
        >
          {/* header */}
          <View
            style={{
              marginTop: SIZES.font,
              marginHorizontal: SIZES.padding,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
              Today's Share
            </Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.gray }}>Sell all</Text>
            </TouchableOpacity>
          </View>

          {/* body image */}
          <View
            style={{
              flexDirection: "row",
              height: "88%",
              marginTop: SIZES.base,
              paddingHorizontal: 25,
              paddingBottom: 30,
            }}
          >
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("PlantDetails")}
                style={{ flex: 1 }}
              >
                <Image
                  source={images.banner1}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", borderRadius: 20 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("PlantDetails")}
                style={{ flex: 1, marginTop: SIZES.font }}
              >
                <Image
                  source={images.banner2}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1.3 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("PlantDetails")}
                style={{ flex: 1, marginLeft: SIZES.font }}
              >
                <Image
                  source={images.banner3}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", borderRadius: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* added friends */}
      <View
        style={{
          height: "20%",
          backgroundColor: COLORS.lightGray,
        }}
      >
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.font,
          }}
        >
          <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
            Added friends
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>5 total</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  resizeMode="cover"
                  source={images.profile1}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    borderColor: COLORS.primary,
                    borderWidth: 4,
                  }}
                />
                <Image
                  resizeMode="cover"
                  source={images.profile2}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    borderColor: COLORS.primary,
                    borderWidth: 4,
                    marginLeft: -20,
                  }}
                />
                <Image
                  resizeMode="cover"
                  source={images.profile3}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    borderColor: COLORS.primary,
                    borderWidth: 4,
                    marginLeft: -20,
                  }}
                />
              </View>
              <TouchableOpacity>
                <Text
                  style={{ color: COLORS.gray, ...FONTS.body4, marginLeft: 10 }}
                >
                  + 2 More
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                Add New
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    padding: 7,
                    backgroundColor: COLORS.gray,
                    borderRadius: 10,
                    marginLeft: 10,
                  }}
                >
                  <AntDesign name="plus" size={30} color={COLORS.primary} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
