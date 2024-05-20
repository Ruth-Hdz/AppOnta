import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Background from './Background';
import { fontStyles } from '../styles';
import { Checkbox } from 'react-native-paper';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

type RegisterProps = {
  navigation: RegisterScreenNavigationProp;
  route: RegisterScreenRouteProp;
};

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Background />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      </View>
      <Text style={[styles.texto, fontStyles.twCenMT]}>Registro</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu nombre"
            placeholderTextColor="#ffffff"
            onChangeText={setNombre}
            value={nombre}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="********* "
            placeholderTextColor="#ffffff"
            secureTextEntry={true}
            onChangeText={setContraseña}
            value={contraseña}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu Correo electrónico "
            placeholderTextColor="#ffffff"
            onChangeText={setCorreo}
            value={correo}
          />
        </View>
        <Checkbox.Item
          label="Acepto Terminos y Condiciones"
          status={aceptaTerminos ? 'checked' : 'unchecked'}
          onPress={() => setAceptaTerminos(!aceptaTerminos)}
          color="#01063E"
          labelStyle={styles.checkboxLabel}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Registrado')}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <Text style={styles.registrarText}>
        ¿Ya tienes una cuenta?
        <Text style={styles.boldText} onPress={() => navigation.navigate('Login')}> Inicia Sesión</Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  formContainer: {
    width: 300,
    backgroundColor: '#0094F1',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 14,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#0094F1',
    color: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    padding: 0,
    fontSize: 15,
  },
  inputLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    color: '#01063E',
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: 180,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  registrarText: {
    color: '#01063E',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'regular',
  },
});

export default Register;
