import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ArrowIcons from 'react-native-vector-icons/Ionicons';

const TodoTextInput = props => {
  const [todo, setTodo] = useState();

  const handleAddtodo = value => {
    props.addtodo(value);
    setTodo(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={todo}
        onChangeText={text => setTodo(text)}
        placeholder={'Write...'}
        placeholderTextColor={'#000'}
        onSubmitEditing={() => handleAddtodo(todo)}
      />
      <TouchableOpacity onPress={() => handleAddtodo(todo)}>
        <View style={styles.button}>
          <ArrowIcons name="send" size={16} color="black" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TodoTextInput;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    backgroundColor: '#e7ebee',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
  },
  inputField: {
    color: '#000',
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
