import React, { useState, useContext } from 'react';
import { View, Button,TextInput, StyleSheet, ImageBackground } from 'react-native';
import { useAuth } from '../../Contexts/auth';

const Authentication: React.FC = () => {

  const [username, setUsername] = useState<string>('azazel');
  const [password, setPassword] = useState<string>('vitor123');

  const {signed, user, signIn } = useAuth();

  function handleSignIn() {
    signIn(username, password);  
  }

  return (
    <ImageBackground 
      source={require('../../Assets/img/chomp-ztower.png')} 
      imageStyle={{ width: 250, height: 220, marginLeft:110, marginTop: 23 }}
      style={styles.container}
    >
      <TextInput placeholder='Username' style={styles.textInput} value={username} onChangeText={text => setUsername(text)} />
      <TextInput placeholder='Password' style={styles.textInput} value={password} onChangeText={text => setPassword(text)}/>
      <Button title="Sign In" onPress={handleSignIn}/>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#724a36'
  },
  textInput: {
    marginBottom: 8,
    borderRadius: 5,
    padding: 10,
    width: 250,
    height: 50,
    backgroundColor: '#fff',
  }
});

export default Authentication;