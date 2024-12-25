import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import ToolBar from "./component/ToolBar";
import Header from "./component/Header";
import Folder from "./component/Folder";
const App = () => {
  const [SearchText, OnChangeSearchText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Header UpdateSearchText={OnChangeSearchText} SearchText={SearchText} />
      <ScrollView style={styles.Body}>
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </ScrollView>
      <ToolBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a082d",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Body: {
    marginVertical: 130,
    paddingHorizontal: 10,
    width: "95%",
    height: "100%",
  },
});

export default App;
