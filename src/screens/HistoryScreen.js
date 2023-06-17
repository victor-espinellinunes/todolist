import React, { useContext } from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { AppContext } from '../context/AppProvider';
import styles from '../components/Styles';

const HistoryScreen = ({ navigation }) => {
  const { tasks } = useContext(AppContext);

  const GoBack = () => {
    navigation.navigate('Main');
  };

  return (
    <View>
        {tasks.length === 0 ? (
        <Text style={styles.text}>Nenhuma tarefa concluida</Text>
        ) : (
            <FlatList
                data={tasks.filter((task) => task.completed)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (<Text style={styles.doneTask}>{item.title}</Text>)}
            />
        )}
      <View style={styles.bigbutton}>
        <Button title="Voltar" onPress={GoBack} />
      </View>
    </View>
  );
};

export default HistoryScreen;
