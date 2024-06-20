import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Background from './Background';
import { useNavigation } from '@react-navigation/native';

const Categorias = [
  { id: '1', nombre: 'Tecnología' },
  { id: '2', nombre: 'Viajes' },
  { id: '3', nombre: 'Salud' },
  { id: '4', nombre: 'Deportes' },
];

const CrearCategoria = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Nueva Categoría</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Crear una nueva categoría</Text>
        <Text style={styles.instructions}>
          Puede personalizar sus categorías con íconos y colores únicos,
          agregando un toque personal a su organización.
        </Text>
      </View>
      <View style={styles.box}>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Escribe el nombre de la categoría"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="camera" size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>Icono</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.colorPreview}></View>
            <Text style={{ marginLeft: 10 }}>Color</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#66cdaa',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  colorPreview: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
    borderRadius: 12,
    marginRight: 5,
  },
  saveButton: {
    backgroundColor: '#ffa500',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
  },
  saveButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CrearCategoria;
