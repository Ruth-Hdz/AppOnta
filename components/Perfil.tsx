import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Background2 from './Background2';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './types';

type PerfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Perfil'>;
type PerfilScreenRouteProp = RouteProp<RootStackParamList, 'Perfil'>;

type Props = {
  navigation: PerfilScreenNavigationProp;
  route: PerfilScreenRouteProp;
};

const Perfil: React.FC<Props> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const [nombre, setNombre] = useState('Violeta');
  const [correo, setCorreo] = useState('violeta@example.com');
  const [contraseña, setContraseña] = useState('12345678'); // Contraseña de ejemplo
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Cambiar el estado de visibilidad de la contraseña
  };

  const CambiarContrasena = () => {
    navigation.navigate('CambiarContrasena'); // Navegar a la pantalla de cambiar contraseña
  };

  const Salir = () => {
    navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión
  };

  return (
    <View style={styles.container}>
      <Background2 />
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.text1}>Perfil</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>Configura tu cuenta OnTa</Text>
        <Text style={styles.instructions}>Administra tu información y contraseña</Text>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Nombre: </Text>
          {isEditingName ? (
            <TextInput
              value={nombre}
              onChangeText={setNombre}
              style={styles.input}
            />
          ) : (
            <Text style={styles.sectionContent}>{nombre}</Text>
          )}
          <TouchableOpacity onPress={() => setIsEditingName(!isEditingName)}>
            <Ionicons name={isEditingName ? "checkmark" : "create"} size={24} color="#000033" />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Correo:</Text>
          {isEditingEmail ? (
            <TextInput
              value={correo}
              onChangeText={setCorreo}
              style={styles.input}
            />
          ) : (
            <Text style={styles.sectionContent}>{correo}</Text>
          )}
          <TouchableOpacity onPress={() => setIsEditingEmail(!isEditingEmail)}>
            <Ionicons name={isEditingEmail ? "checkmark" : "create"} size={24} color="#000033" />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Contraseña:</Text>
          <Text style={styles.sectionContent}>{showPassword ? contraseña : '********'.slice(0, 9)}</Text>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#000033" />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Cambiar Contraseña</Text>
          <TouchableOpacity onPress={CambiarContrasena}>
            <Ionicons name="create" size={24} color="#000033" />
          </TouchableOpacity>
        </View>
        <View style={styles.logoutButtonContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={Salir}>
            <Text style={styles.logoutButtonText}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginTop: 140,
    marginLeft: 20,
    marginRight: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 50,
  },
  instructions: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 30,
  },
  sectionContainer: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000033',
  },
  separator: {
    height: 1,
    backgroundColor: '#000033',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    padding: 8,
    marginRight: 8,
  },
  logoutButtonContainer: {
    alignItems: 'flex-end',
    marginTop: 150,
    marginRight: 0,
  },
  logoutButton: {
    backgroundColor: '#00C29D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  sectionContent: {
    flex: 1,
    fontSize: 17,
    color: '#000033',
  },
});

export default Perfil;
