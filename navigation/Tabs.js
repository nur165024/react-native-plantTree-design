import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../constants/theme";
import { Home } from "../screens/";

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLable: false,
  style: {
    height: "10%",
  },
};

const TabBtn = ({ Icon, name, size, style }) => {
  return (
    <Text>
      <Icon name={name} size={size} color={style} />
    </Text>
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case "Home":
              return (
                <TabBtn
                  Icon={FontAwesome}
                  name="flash"
                  size={20}
                  style={tintColor}
                />
              );

            case "Box":
              return (
                <TabBtn
                  Icon={FontAwesome}
                  name="cube"
                  size={20}
                  style={tintColor}
                />
              );

            case "Camera":
              return (
                <TabBtn
                  Icon={EvilIcons}
                  name="camera"
                  size={26}
                  style={tintColor}
                />
              );

            case "Search":
              return (
                <TabBtn
                  Icon={Feather}
                  name="search"
                  size={22}
                  style={tintColor}
                />
              );

            case "Favourite":
              return (
                <TabBtn
                  Icon={AntDesign}
                  name="hearto"
                  size={20}
                  style={tintColor}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favourite" component={Home} />
    </Tab.Navigator>
  );
}
