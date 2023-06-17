import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { AppContext } from '../context/AppProvider';
import styles from '../components/Styles';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(AppContext);

  const handleCreateTask = () => {
    addTask({ title, completed: false });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput style={styles.textInput}
        placeholder="Tarefa"
        value={title}
        onChangeText={setTitle}
      />
       <View style={styles.button}>
      <Button title="Criar tarefa" onPress={handleCreateTask} />
      </View>
    </View>
  );
};

export default CreateScreen;
