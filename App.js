import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Usar createNativeStackNavigator
import Login from './components/Login';
import Registro from './components/Registro';
import Inicio from './components/Inicio';
import RecuperarContrasena from './components/RecuperarContrasena';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Deshabilitar el header para la pantalla de login
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ headerShown: false }} // Deshabilitar el header para la pantalla de registro
        />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }} // Deshabilitar el header para la pantalla de inicio
        />
        <Stack.Screen
          name="RecuperarContrasena"
          component={RecuperarContrasena}
          options={{ headerShown: false }} // Deshabilitar el header para la pantalla de inicio
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
