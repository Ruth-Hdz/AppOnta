import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import Background from './Background';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from '../config';

// Define the Category interface
interface Category {
  id: number;
  nombre: string;
  icono: string;
  color: string;
  id_usuario: number;
  numero_articulos: number; 
}

const { width } = Dimensions.get('window');

const Inicio = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userId !== null) {
      fetchCategories(userId);
    }
  }, [userId]);

  const fetchUserData = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedUserId = await AsyncStorage.getItem('userId');
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        setUsername('Usuario');
      }
      if (storedUserId) {
        setUserId(parseInt(storedUserId, 10));
      } else {
        setUserId(1); // Valor por defecto si no hay id de usuario
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };

  const fetchCategories = async (userId: number) => {
    try {
      const response = await fetch(`${BASE_URL}/categories/${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleMenuPress = () => {
    navigation.navigate('Perfil');
  };

  const handleMoreOptionsPress = () => {
    setModalVisible(true);
  };

  const handleCreateCategory = () => {
    setModalVisible(false);
    navigation.navigate('CrearCategoria');
  };

  const handleCreateArticle = () => {
    setModalVisible(false);
    navigation.navigate('CrearArticulo');
  };

  const handleDeleteCategory = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    setConfirmModalVisible(true);
  };

  const confirmDeleteCategory = async () => {
    if (selectedCategoryId !== null) {
        try {
            const response = await fetch(`${BASE_URL}/categories/${userId}`, {
                method: 'DELETE',
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                console.log('Category deleted successfully');
                setCategories(categories.filter((category) => category.id !== userId));
                setConfirmModalVisible(false);
            } else {
                console.error('Error deleting category');
            }
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    }
};

  

  const cancelDeleteCategory = () => {
    setSelectedCategoryId(null);
    setConfirmModalVisible(false);
  };

  const handleCategoryPress = (categoryId: number, categoryTitle: string) => {
    navigation.navigate('ListaCategorias', { categoryId: categoryId.toString(), categoryTitle });
  };

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.headerContainer}>
        <View style={styles.textWithIconContainer}>
          <Text style={styles.text1}>Hola,</Text>
          <TouchableOpacity onPress={handleMenuPress}>
            <Ionicons name="menu" size={32} color="#ffffff" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{username || 'Usuario'}</Text>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={24} color="#000033" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#000033"
            selectionColor="#000033"
            onFocus={() => navigation.navigate('Buscar')}
          />
        </View>
        <View style={styles.categoriesHeaderContainer}>
          <Text style={styles.text3}>Categorías</Text>
          <TouchableOpacity onPress={handleMoreOptionsPress}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#ffffff" style={styles.moreOptionsIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={[styles.categoryItem, { backgroundColor: item.color }]}>
            <TouchableOpacity
              style={styles.categoryContent}
              onPress={() => handleCategoryPress(item.id, item.nombre)}
            >
              <Ionicons name={item.icono} size={32} color="#ffffff" style={styles.categoryIcon} />
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>{item.nombre}</Text>
                <Text style={styles.categoryArticlesCount}>{item.numero_articulos} artículos</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.categoryIcons}>
              <TouchableOpacity onPress={handleCreateArticle}>
                <Ionicons name="add" size={24} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteCategory(item.id)}>
                <Ionicons name="trash" size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.categoriesList}
      />

      {/* Modal de Opciones */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalOption} onPress={handleCreateCategory}>
            <Text style={styles.modalOptionText}>Crear Categoría</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={handleCreateArticle}>
            <Text style={styles.modalOptionText}>Crear Artículo</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal de Confirmación para Eliminar Categoría */}
      <Modal
        transparent={true}
        visible={confirmModalVisible}
        animationType="fade"
        onRequestClose={() => setConfirmModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setConfirmModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.confirmModalContainer}>
          <View style={styles.confirmModalContent}>
            <Text style={styles.confirmModalText}>¿Seguro que quieres eliminar esta categoría?</Text>
            <View style={styles.confirmModalButtons}>
              <TouchableOpacity style={styles.confirmButton} onPress={confirmDeleteCategory}>
                <Text style={styles.confirmButtonText}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={cancelDeleteCategory}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
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
  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  textWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  text1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  icon: {
    marginLeft: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000033',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  categoriesHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  moreOptionsIcon: {
    marginLeft: 10,
  },
  categoriesList: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  categoryItem: {
    width: (width - 60) / 2,
    height: (width - 60) / 2,
    margin: 10,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    marginRight: 10,
  },
  categoryTextContainer: {
    flexDirection: 'column',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'left',
  },
  categoryArticlesCount: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 5,
    textAlign: 'left',
  },
  categoryIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalOption: {
    paddingVertical: 15,
  },
  modalOptionText: {
    fontSize: 18,
    color: '#000033',
  },
  confirmModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  confirmModalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  confirmModalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  confirmModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#FE3777',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#0270D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Inicio;
