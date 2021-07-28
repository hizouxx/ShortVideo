import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Video from './pages/Video.js';
import User from './pages/User.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Video" component={Video}></Stack.Screen>
          <Stack.Screen name="User" component={User}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
