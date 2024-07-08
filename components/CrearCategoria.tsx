import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import Background2 from './Background2';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type CrearCategoriaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CrearCategoria'>;

const CrearCategoria = () => {
  const navigation = useNavigation<CrearCategoriaScreenNavigationProp>();
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleGuardar = () => {
    setSuccessMessage('Guardado con éxito');
    setShowModal(true);
  
  };

  const closeModal = () => {
    setShowModal(false);
    setSuccessMessage(''); // Limpiar el mensaje de éxito
    navigation.navigate('Inicio'); // Navegar a la lista de categorías después de cerrar el modal
  };

  return (
    <View style={styles.container}>
      <Background2 />
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
      <TouchableOpacity style={styles.saveButton} onPress={handleGuardar}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>

      {/* Modal de éxito */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal as () => void} // Asegurar que closeModal coincida con la firma esperada
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.successCircle}>
              <Ionicons name="checkmark" size={60} color="white" />
            </View>
            <Text style={styles.modalText}>{successMessage}</Text>
            <Pressable style={styles.modalCloseButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="#000033" />
            </Pressable>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#FF7306',
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
  // Estilos para el modal
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Ajusta el ancho según necesites
    maxHeight: '80%', // Ajusta la altura máxima según necesites
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000033',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00C29D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default CrearCategoria;
