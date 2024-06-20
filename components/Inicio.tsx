import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, FlatList, Dimensions } from 'react-native';
import Background from './Background';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types'; // Ajusta la ruta si es necesario

const { width } = Dimensions.get('window'); // Obtenemos el ancho de la pantalla

const initialCategoriesData = [
  { id: '1', title: 'Categoría 1', articlesCount: 5, color: '#FFA07A', icon: 'home' },
  { id: '2', title: 'Categoría 2', articlesCount: 3, color: '#20B2AA', icon: 'car' },
  { id: '3', title: 'Categoría 3', articlesCount: 8, color: '#778899', icon: 'book' },
  { id: '4', title: 'Categoría 4', articlesCount: 2, color: '#8FBC8F', icon: 'business' },
  { id: '5', title: 'Categoría 5', articlesCount: 7, color: '#FFB6C1', icon: 'camera' },
  { id: '6', title: 'Categoría 6', articlesCount: 4, color: '#F0E68C', icon: 'gift' },
  { id: '7', title: 'Categoría 7', articlesCount: 6, color: '#DDA0DD', icon: 'musical-notes' },
  { id: '8', title: 'Categoría 8', articlesCount: 9, color: '#B0E0E6', icon: 'paw' },
  { id: '9', title: 'Categoría 9', articlesCount: 1, color: '#FFD700', icon: 'plane' },
  { id: '10', title: 'Categoría 10', articlesCount: 11, color: '#98FB98', icon: 'restaurant' },
];

const Inicio = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState(initialCategoriesData);

  const handleMenuPress = () => {
    navigation.navigate('Perfil');
  };

  const handleMoreOptionsPress = () => {
    setModalVisible(true);
  };

  const handleCreateCategory = () => {
    setModalVisible(false);
    navigation.navigate('CrearCategoria'); // Asegúrate de tener esta ruta definida
  };

  const handleCreateArticle = () => {
    setModalVisible(false);
    navigation.navigate('CrearArticulo'); // Asegúrate de tener esta ruta definida
  };

  const handleDeleteCategory = (categoryId) => {
    setCategories(categories.filter(category => category.id !== categoryId));
  };

  const handleCategoryPress = (categoryId, categoryTitle) => {
    navigation.navigate('ListaCategorias');
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.categoryItem, { backgroundColor: item.color }]}
      onPress={() => handleCategoryPress(item.id, item.title)}
    >
      <Ionicons name={item.icon} size={32} color="#ffffff" style={styles.categoryIcon} />
      <View style={styles.categoryContent}>
        <View style={styles.categoryTextContainer}>
          <Text style={styles.categoryTitle}>{item.title}</Text>
          <Text style={styles.categoryArticlesCount}>{item.articlesCount} artículos</Text>
        </View>
      </View>
      <View style={styles.categoryIcons}>
        <TouchableOpacity onPress={() => console.log('Agregar artículo a', item.title)}>
          <Ionicons name="add" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteCategory(item.id)}>
          <Ionicons name="trash" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {<Background />}
      <View style={styles.headerContainer}>
        <View style={styles.textWithIconContainer}>
          <Text style={styles.text1}>Hola,</Text>
          <TouchableOpacity onPress={handleMenuPress}>
            <Ionicons name="menu" size={32} color="#ffffff" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Violeta</Text>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={24} color="#01063E" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#01063E"
            selectionColor="#01063E"
          />
        </View>
        <View style={styles.categoriesHeaderContainer}>
          <Text style={styles.text3}>Categorias</Text>
          <TouchableOpacity onPress={handleMoreOptionsPress}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#ffffff" style={styles.moreOptionsIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoriesList}
      />

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
    color: '#01063E',
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
    paddingHorizontal: 10, // Ajusta el margen horizontal
    alignItems: 'center', // Centra horizontalmente el contenido
  },
  categoryItem: {
    width: (width - 60) / 2, // Ajusta el ancho para que sea la mitad del ancho de la pantalla menos los márgenes
    height: (width - 60) / 2, // Ajusta la altura para que sea igual al ancho
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
    color: '#01063E',
  },
});

export default Inicio;
