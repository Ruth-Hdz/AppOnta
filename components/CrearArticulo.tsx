import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import Background2 from './Background2';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type CrearArticuloScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CrearArticulo'>;

const CrearArticulo = () => {
  const navigation = useNavigation<CrearArticuloScreenNavigationProp>();
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
    setSuccessMessage('Guardado Correctamente');
    navigation.navigate('ListaCategorias'); 
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
      <TouchableOpacity style={styles.saveButton} onPress={handleGuardar}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>

      {/* Modal de éxito */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.successCircle}>
              <Ionicons name="checkmark" size={60} color="white" />
            </View>
            <Text style={styles.modalText}>{successMessage}</Text>
            <Pressable style={styles.modalCloseButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="#01063E" />
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
    borderColor: '#01063E',
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

export default CrearArticulo;
