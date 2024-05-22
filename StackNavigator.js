import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import SportsScreen from './screens/SportsScreen';
import YogaScreen from './screens/YogaScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Sports" component={SportsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Workout" component={WorkoutScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Yoga" component={YogaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;