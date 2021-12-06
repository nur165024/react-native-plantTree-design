import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import images from "../constants/images";
import { COLORS, FONTS, SIZES } from "../constants/theme";

// requirment bar
const RequirmentBar = ({ Icon, iconName, size, percentagePrimaryColor }) => {
  return (
    <View>
      <View
        style={{
          borderWidth: 2,
          borderColor: COLORS.gray,
          marginBottom: SIZES.font,
          padding: 5,
          borderRadius: SIZES.base,
        }}
      >
        <Icon name={iconName} color={COLORS.gray} size={size} />
      </View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: 3,
          left: 0,
          bottom: 0,
          backgroundColor: COLORS.gray,
          borderRadius: SIZES.redius,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: percentagePrimaryColor,
          height: 3,
          left: 0,
          bottom: 0,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.redius,
        }}
      />
    </View>
  );
};

// requirment bar list
const RequirmentBarList = ({ Icon, iconName, size, title, subTitle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: SIZES.font,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name={iconName} color={COLORS.gray} size={size} />
        <Text
          style={{
            marginLeft: SIZES.font,
            color: COLORS.secondary,
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>
      </View>

      <View>
        <Text style={{ color: COLORS.gray }}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default function PlantDetails({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: COLORS.lightGray }]}>
      {/* header part */}
      <View style={{ position: "relative", height: 250 }}>
        <ImageBackground
          source={images.banner3}
          style={{
            width: "100%",
            height: 250,
            position: "absolute",
            zIndex: -1,
          }}
        />
        {/* header text */}
        <View
          style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.padding * 2,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: SIZES.padding,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: COLORS.white,
                opacity: 0.4,
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <AntDesign name="left" color="#f9f9f9" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="fullscreen"
                color="#fff"
                size={30}
              />
            </TouchableOpacity>
          </View>

          <View style={{ width: "50%" }}>
            <Text style={{ color: COLORS.white, ...FONTS.body1 }}>
              Glory Mantas
            </Text>
          </View>
        </View>
      </View>

      {/* body part */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          marginTop: -10,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: COLORS.gray, ...FONTS.h2 }}>Requirments</Text>
            <Text>
              <Ionicons name="remove-outline" size={30} color={COLORS.gray} />
            </Text>
          </View>

          {/* RequirmentBar */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.redius,
            }}
          >
            <RequirmentBar
              Icon={Feather}
              iconName={"sun"}
              size={25}
              percentagePrimaryColor={"60%"}
            />

            <RequirmentBar
              Icon={MaterialCommunityIcons}
              iconName={"weather-cloudy"}
              size={26}
              percentagePrimaryColor={"45%"}
            />

            <RequirmentBar
              Icon={FontAwesome5}
              iconName={"temperature-high"}
              size={26}
              percentagePrimaryColor={"70%"}
            />

            <RequirmentBar
              Icon={MaterialCommunityIcons}
              iconName={"island"}
              size={27}
              percentagePrimaryColor={"25%"}
            />
            <RequirmentBar
              Icon={Foundation}
              iconName={"trees"}
              size={27}
              percentagePrimaryColor={"65%"}
            />
          </View>

          {/* requirments bar list */}
          <View>
            <RequirmentBarList
              Icon={Feather}
              iconName={"sun"}
              size={25}
              title={"Sunlight"}
              subTitle={"15 C"}
            />
            <RequirmentBarList
              Icon={MaterialCommunityIcons}
              iconName={"weather-cloudy"}
              size={26}
              title={"Water"}
              subTitle={"250 ML Daily"}
            />
            <RequirmentBarList
              Icon={FontAwesome5}
              iconName={"temperature-high"}
              size={26}
              title={"Room Temp"}
              subTitle={"25 C"}
            />
            <RequirmentBarList
              Icon={MaterialCommunityIcons}
              iconName={"island"}
              size={27}
              title={"Soil"}
              subTitle={"3 Kg"}
            />
            <RequirmentBarList
              Icon={Foundation}
              iconName={"trees"}
              size={27}
              title={"Fertilizer"}
              subTitle={"150 Mg"}
            />
          </View>
        </View>

        {/* boot part */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              marginRight: 15,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              height: 80,
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h4, width: "50%" }}>
              Take Action
            </Text>
            <AntDesign name="right" color={COLORS.white} size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: COLORS.gray, ...FONTS.body4, width: "70%" }}>
              Almost 2 week of growing time
            </Text>
            <AntDesign name="arrowdown" color={COLORS.gray} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
