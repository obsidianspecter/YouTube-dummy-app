// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import VideoPlayerScreen from './components/VideoPlayerScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'YouTube', headerStyle: { backgroundColor: '#FF0000' }, headerTintColor: '#FFFFFF' }} 
        />
        <Stack.Screen 
          name="VideoPlayer" 
          component={VideoPlayerScreen} 
          options={{ title: 'Video Player', headerStyle: { backgroundColor: '#000000' }, headerTintColor: '#FFFFFF' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;