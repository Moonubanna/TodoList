import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DeleteIcons from 'react-native-vector-icons/MaterialIcons';

const TodoItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{props.index}</Text>
      </View>
      <View style={styles.todoContainer}>
        <Text style={styles.todo}>{props.todo}</Text>
        <TouchableOpacity onPress={() => props.deletetodo()}>
          <DeleteIcons
            style={styles.delete}
            name="delete"
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  index: {
    color: '#000',
    fontSize: 20,
  },
  todoContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  todo: {
    color: '#000',
    width: '90%',
    fontSize: 16,
  },
  delete: {
    marginRight: 10,
  },
});
