import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome to News World" component={HomeScreen} />
        <Stack.Screen name="Detail Page" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
