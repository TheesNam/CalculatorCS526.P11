import React from "react";
import {
  ScrollView,
  ScrollViewComponent,
  StyleSheet,
  View,
} from "react-native";

import Folder from "../../component/Folder";
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Folder />
      <Folder />
      <Folder />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#0a082d",
  },
});

export default Home;
