import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { AppContext } from '../context/AppProvider';
import styles from '../components/Styles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setLoggedIn } = useContext(AppContext);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      navigation.navigate('Main');
    }
  };

  return (
    <View>
      <TextInput style={styles.textInput}
        placeholder="Digite seu login"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput style={styles.textInput}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.button}>
      <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
