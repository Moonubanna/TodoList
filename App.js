import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodoTextInput from './src/components/TodoTextInput';
import TodoItem from './src/components/TodoItem';

export default function App() {
  const [todos, setTodo] = useState([]);

  const addtodo = todo => {
    if (todo == null) return;
    setTodo([...todos, todo]);
    Keyboard.dismiss();
  };

  const deletetodo = deleteIndex => {
    setTodo(todos.filter((value, index) => index !== deleteIndex));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.heading}>{'TODO LIST'}</Text>
        <ScrollView style={styles.scrollView}>
          {todos.map((todo, index) => {
            return (
              <View key={index} style={styles.todoContainer}>
                <TodoItem
                  index={index + 1}
                  todo={todo}
                  deletetodo={() => deletetodo(index)}
                />
              </View>
            );
          })}
        </ScrollView>
        <TodoTextInput addtodo={addtodo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B2038',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 90,
  },
  todoContainer: {
    marginTop: 20,
  },
});
