import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
      setHistory([...history, { key: `${input} = ${evalResult}` }]);
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter calculation"
        keyboardType="numeric"
      />
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handleInput('1')} />
        <Button title="2" onPress={() => handleInput('2')} />
        <Button title="3" onPress={() => handleInput('3')} />
        <Button title="+" onPress={() => handleInput('+')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handleInput('4')} />
        <Button title="5" onPress={() => handleInput('5')} />
        <Button title="6" onPress={() => handleInput('6')} />
        <Button title="-" onPress={() => handleInput('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handleInput('7')} />
        <Button title="8" onPress={() => handleInput('8')} />
        <Button title="9" onPress={() => handleInput('9')} />
        <Button title="*" onPress={() => handleInput('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="0" onPress={() => handleInput('0')} />
        <Button title="C" onPress={clearInput} />
        <Button title="=" onPress={calculateResult} />
        <Button title="/" onPress={() => handleInput('/')} />
      </View>
      <Text style={styles.result}>Result: {result}</Text>
      <Text style={styles.historyTitle}>History:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  historyTitle: {
    fontSize: 18,
    marginTop: 20,
  },
  historyItem: {
    fontSize: 16,
    marginVertical: 2,
  },
});
