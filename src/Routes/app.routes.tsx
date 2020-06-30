import React from 'react';

import Home from '../Pages/Home/Index';
import Group from '../Pages/Group/Index';

import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: '#f0f0f5'
            }
        }} 
    >
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Group" component={Group}/>
    </AppStack.Navigator>
);

export default AppRoutes;