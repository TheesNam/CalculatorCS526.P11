import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  LayoutAnimation,
} from "react-native";
import Quiz from "./Quiz";
const Folder = () => {
  const [NameFolder, ChangeNameFolder] = useState("New Folder");
  const [ScrollHorizontal, AddScrollHorizontal] = useState([]);
  const CreateQuiz = () => {
    LayoutAnimation.easeInEaseOut();
    AddScrollHorizontal([...ScrollHorizontal, <Quiz Name="hehe" />]);
    return;
  };
  return (
    <View>
      <Text style={styles.HeaderText}>{NameFolder}</Text>
      <View style={styles.container}>
        <ScrollView style={styles.ScrollHorizontal} horizontal={true}>
          <TouchableOpacity onPress={CreateQuiz} style={styles.CreateQuiz}>
            <Text style={styles.QuizText}>CreateQuiz</Text>
          </TouchableOpacity>
          {ScrollHorizontal.map((val) => (
            <View>{val}</View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 10,
  },
  HeaderText: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 30,
  },
  ScrollHorizontal: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: "100%",
    width: "100%",
  },
  CreateQuiz: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "gray",
    height: "100%",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  QuizText: {
    color: "white",
  },
});

export default Folder;
