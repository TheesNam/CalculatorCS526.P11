import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const Quiz = (props) => {
  const [NameQuiz, ChangeNameQuiz] = useState(props.Name);
  return (
    <View style={styles.Quiz}>
      <Text style={styles.QuizText}> {NameQuiz} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Quiz: {
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

export default Quiz;
