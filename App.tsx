import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes/Index';
import  { AuthProvider } from './src/Contexts/auth';


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
          <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;