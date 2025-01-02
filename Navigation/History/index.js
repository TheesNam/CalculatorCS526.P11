import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const History = () => {
  const currentDate = new Date();
  const [NameQuiz, ChangeNameQuiz] = useState("New Quiz");
  const [DateFinished, ChangeDateFinished] = useState(
    `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`
  );

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.block}>
        <Text style={styles.quizTest}> {NameQuiz} </Text>
        <Text style={styles.quizTest}> Last Date finished: {DateFinished}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#0a082d",
  },
  block: {
    height: 150,
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  quizTest: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default History;
