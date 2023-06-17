import React, { useContext } from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import { AppContext } from '../context/AppProvider';
import styles from '../components/Styles';

const MainScreen = ({ navigation }) => {
  const { tasks, completeTask, logout } = useContext(AppContext);

  const handleTaskPress = (taskId) => {
    completeTask(taskId);
  };

  const handleLogout = () => {
    logout();
    navigation.goBack();
  };

  return (
    <View>
      {tasks.length === 0 ? (
        <Text style={styles.text}>Nenhuma tarefa por fazer</Text>
      ) : tasks.every((task) => task.completed) ? (
        <Text style={styles.text}>Nenhuma tarefa por fazer</Text>
      ) : (
        <FlatList
          data={tasks.filter((task) => !task.completed)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.todoTask} onPress={() => handleTaskPress(item.id)}>
              {item.title}
            </Text>
          )}
        />
      )}
      <View style={styles.button}>
        <Button title="Criar tarefa" onPress={() => navigation.navigate('Create')} />
      </View>
      <View style={styles.button}>
        <Button title="Historico" onPress={() => navigation.navigate('History')} />
      </View>
      <View style={styles.button}>
        <Button title="Deslogar" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default MainScreen;