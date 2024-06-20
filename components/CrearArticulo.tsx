import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Background2 from './Background2';
import { Ionicons } from '@expo/vector-icons'; // Importa Ionicons desde @expo/vector-icons
import { useNavigation } from '@react-navigation/native';

const CATEGORIAS = [
  { id: '1', nombre: 'Tecnología' },
  { id: '2', nombre: 'Viajes' },
  { id: '3', nombre: 'Salud' },
  { id: '4', nombre: 'Deportes' },
];
const CrearArticulo = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Background2 />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Nuevo Artículo</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Crear un nuevo artículo</Text>
        <Text style={styles.instructions}>
          Elija una categoría, agregando un toque de personalización a su artículo.
        </Text>
      </View>
      <View style={styles.box}>
        {/* TextInput para la categoría con ícono de flecha desplegable */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Categoría"
            editable={false}
          />
          <Ionicons name="chevron-down" size={24} color="#01063E" style={styles.dropdownIcon} />
        </View>
        {/* TextInput para el título */}
        <TextInput
          style={[styles.input, styles.inputTitle]}
          placeholder="Ingresa el título de tu artículo"
        />
        {/* TextInput para el texto */}
        <TextInput
          style={[styles.input, styles.largeInput]}
          placeholder="Texto"
          multiline={true}
          numberOfLines={6}
        />
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
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
    padding: 10,
  },
  backButton: {
    marginRight: 10,
    marginTop: 50,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
  },
  content: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'left',
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  box: {
    backgroundColor: '#00C29D',
    padding: 30,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    color: '#01063E',
  },
  inputTitle: {
    marginTop: 10,
  },
  largeInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  saveButton: {
    backgroundColor: '#ffa500',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'center',
  },
  saveButtonText: {
    color: '#01063E',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CrearArticulo;
