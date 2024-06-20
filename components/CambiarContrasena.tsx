import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Background from './Background';  

const CambiarContrasena = () => {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [correo, setCorreo] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const cambiarContra = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.appTitle}>VIOLETA</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>Cambiar Contraseña</Text>
        <Text style={styles.instructions}>
          Su contraseña debe tener al menos 6 caracteres y debe incluir una combinación de números, letras y caracteres especiales (!$@%)
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña actual"
            placeholderTextColor="#ffffff"
            onChangeText={setNombre}
            value={nombre}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nueva contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="*********"
            placeholderTextColor="#ffffff"
            secureTextEntry={true}
            onChangeText={setContraseña}
            value={contraseña}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Repite Nueva Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor="#ffffff"
            onChangeText={setCorreo}
            value={correo}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLong} onPress={cambiarContra}>
          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 20,
  },
  backButton: {
    marginRight: 10,
    marginTop: 30,
  },
  appTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  instructions: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 70,
  },
  formContainer: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#0094F1',
    padding: 30, // Aumentado el padding para hacerlo más largo
    borderRadius: 10,
    marginBottom: 30, // Ajustado el margen inferior
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    color: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    paddingVertical: 5,
  },
  buttonContainer: {
    alignItems: 'center', 
    marginTop: 10, 
  },
  buttonLong: {
    backgroundColor: '#00C29D',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CambiarContrasena;
