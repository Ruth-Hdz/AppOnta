import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import Background from './Background';
import { Checkbox } from 'react-native-paper';

type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
};

type RegistroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registro'>;
type RegistroScreenRouteProp = RouteProp<RootStackParamList, 'Registro'>;

type RegistroProps = {
  navigation: RegistroScreenNavigationProp;
  route: RegistroScreenRouteProp;
};

const Registro: React.FC<RegistroProps> = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  return (
    <View style={styles.container}>
      <Background />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollViewContent}
        enableOnAndroid={true}
        extraScrollHeight={20}
      >
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.texto}>Registro</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Introduce tu nombre"
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
              placeholder="Introduce tu Correo Electrónico "
              placeholderTextColor="#ffffff"
              onChangeText={setCorreo}
              value={correo}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox.Android
              status={aceptaTerminos ? 'checked' : 'unchecked'}
              onPress={() => setAceptaTerminos(!aceptaTerminos)}
              color="#000033"
              uncheckedColor="#000033"
            />
            <Text style={styles.checkboxLabel}>Acepto Terminos y Condiciones</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Registrado')}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.registrarText}>
          ¿Ya tienes una cuenta?
          <Text style={styles.boldText} onPress={() => navigation.navigate('Login')}>
            {' '}
            Inicia Sesión
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
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
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 14,
    textAlign: 'center',
  },
  inputContainer: {
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
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    color: '#000033',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF7306',
    paddingVertical: 15,
    borderRadius: 30,
    width: 180,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  registrarText: {
    color: '#000033',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

export default Registro;