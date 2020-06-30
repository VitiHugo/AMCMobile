import React from 'react';

import Authentication from '../Pages/Authentication/Index';

import { createStackNavigator } from '@react-navigation/stack';


const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator
        headerMode="none" 
    >
        <AuthStack.Screen name="Authentication" component={Authentication}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;