import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const ToolBar = () => {
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity style={styles.circle}>
        <Image
          source={require("../../assets/images-removebg-preview.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circle}>
        <Image
          source={require("../../assets/Instagram-home-icon-on-transparent-background-PNG-removebg-preview.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    position: "absolute",
    bottom: 1,
    width: "100%",
    backgroundColor: "#2e3756",
    height: 80,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    marginHorizontal: 4,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    tintColor: "white",
  },
});

export default ToolBar;
