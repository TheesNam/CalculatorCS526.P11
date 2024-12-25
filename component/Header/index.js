import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
const Header = (props) => {
  return (
    <SafeAreaView style={styles.header}>
      <TextInput
        style={styles.HeadSearchBar}
        onChangeText={props.UpdateSearchText}
        value={props.SearchText}
        placeholder="Search"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    backgroundColor: "#2e3756",
    height: 120,
    width: "90%",
    marginHorizontal: 20,
    paddingBottom: 20,
    elevation: 5,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderCurve: "continuous",
  },
  HeadSearchBar: {
    color: "black",
    backgroundColor: "white",
    height: 40,
    width: "85%",
    borderWidth: 1,
    borderColor: "black",
    elevation: 10,
    borderRadius: 180,
    fontSize: 18,
    fontWeight: "300",
    paddingLeft: 20,
  },
});

export default Header;
