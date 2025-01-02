import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Header from "./component/Header";
import History from "./Navigation/History";
import Home from "./Navigation/Home";
import CreateObject from "./Navigation/CreateObject";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "History") {
            iconName = focused ? "time" : "time-outline";
          }

          return <Ionicons name={iconName} size={35} color={color} />;
        },
        tabBarOptions: {
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        },
        tabBarStyle: {
          backgroundColor: "#2e3756",
          height: 70,
        },
        tabBarShowLabel: false,
        tabBarIconStyle: {
          justifyContent: "center",
          alignContent: "center",
          flex: 1,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TrangChu" component={CreateObject} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const App = () => {
  const [SearchText, OnChangeSearchText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header UpdateSearchText={OnChangeSearchText} SearchText={SearchText} />
      </View>
      <View style={styles.Body}>
        <RootStack />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a082d",
  },
  Body: {
    flex: 1,
    marginTop: 130,
  },
});

export default App;
