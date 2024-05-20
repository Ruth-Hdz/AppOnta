import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Usar createNativeStackNavigator
import Login from './components/Login';
import Register from './components/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Deshabilitar el header para la pantalla de login
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }} // Deshabilitar el header para la pantalla de registro
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
