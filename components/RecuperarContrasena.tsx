import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Background2 from './Background2';
import { useNavigation } from '@react-navigation/native';
import { MailComposer } from 'expo-mail-composer';

const RecuperarContrasena = () => {
  const [correo, setCorreo] = useState('');
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const generarCodigoVerificacion = () => {     
    // Genera un código de verificación aleatorio (puedes usar una lógica más robusta aquí)
    const codigoVerificacion = Math.floor(100000 + Math.random() * 900000);
    enviarCodigoVerificacion(correo, codigoVerificacion);
  };

  const enviarCodigoVerificacion = async (correo: string, codigoVerificacion: number) => {
    try {
      await MailComposer.composeAsync({
        recipients: [correo],
        subject: 'Código de Verificación',
        body: `Tu código de verificación es: ${codigoVerificacion}`,
      });
      Alert.alert('Correo enviado', 'Se ha enviado un código de verificación a tu correo electrónico.');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      Alert.alert('Error', 'Ha ocurrido un error al enviar el correo electrónico.');
    }
  };

  
  return (
    <View style={styles.container}>
      <Background2 />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.appTitle}>APP ONTA</Text>
      </View>
      <Text style={styles.subTitle}>Recuperar Contraseña</Text>
      <Text style={styles.instructions}>
        Escribe tu email, a continuación, y te enviaremos un correo electrónico para restablecer la contraseña.
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu Correo Electrónico"
            placeholderTextColor="#ffffff"
            onChangeText={setCorreo}
            value={correo}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLong} onPress={generarCodigoVerificacion}>
        <Text style={styles.buttonText}>RECUPERAR CONTRASEÑA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  appTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
    top: 150, // Ajusta la posición superior según sea necesario
    left: 30, // Pega el texto hacia la izquierda
  },
  instructions: {
    color: '#FFF',
    textAlign: 'left', // Alinea el texto a la izquierda
    marginLeft: 30, // Ajusta el margen izquierdo para que coincida con el título
    marginRight: 30, // Ajusta el margen derecho si es necesario
    marginTop: -80, // Ajusta este valor para mover el texto hacia arriba
  },
  formContainer: {
    width: 300,
    backgroundColor: '#0094F1',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70, // Añade margen superior para separar el formulario
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
    maxHeight: 100, // Establece la altura máxima deseada
  },
  inputLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonLong: {
    backgroundColor: '#00C29D',
    paddingVertical: 15,
    paddingHorizontal: 30, // Ajusta este valor según sea necesario para hacer el botón más largo
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default RecuperarContrasena;