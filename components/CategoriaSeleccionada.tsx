import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Dimensions } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './types';
import { Ionicons } from '@expo/vector-icons';
import Background2 from './Background2';


const { width } = Dimensions.get('window');

type CategoriaSeleccionadaRouteProp = RouteProp<RootStackParamList, 'CategoriaSeleccionada'>;

const CategoriaSeleccionada: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<CategoriaSeleccionadaRouteProp>();
  const { categoryTitle, categoryColor } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [starredArticles, setStarredArticles] = useState<string[]>([]);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleBack = () => {
    navigation.goBack();
  };
  const initialArticlesData = [
    { id: '1', title: 'Artículo 1', category: 'Categoría 1' },
    { id: '2', title: 'Artículo 2', category: 'Categoría 1' },
    { id: '3', title: 'Artículo 3', category: 'Categoría 2' },
    { id: '4', title: 'Artículo 4', category: 'Categoría 2' },
    { id: '5', title: 'Artículo 5', category: 'Categoría 3' },
    { id: '6', title: 'Artículo 6', category: 'Categoría 3' },
    { id: '7', title: 'Artículo 7', category: 'Categoría 1' },
    { id: '8', title: 'Artículo 8', category: 'Categoría 2' },
    { id: '9', title: 'Artículo 9', category: 'Categoría 3' },
    { id: '10', title: 'Artículo 10', category: 'Categoría 1' },
    { id: '11', title: 'Artículo 11', category: 'Categoría 4' },
    { id: '12', title: 'Artículo 12', category: 'Categoría 4' },
    { id: '13', title: 'Artículo 13', category: 'Categoría 5' },
    { id: '14', title: 'Artículo 14', category: 'Categoría 5' },
    { id: '15', title: 'Artículo 15', category: 'Categoría 6' },
    { id: '16', title: 'Artículo 16', category: 'Categoría 6' },
    { id: '17', title: 'Artículo 17', category: 'Categoría 7' },
    { id: '18', title: 'Artículo 18', category: 'Categoría 7' },
    { id: '19', title: 'Artículo 19', category: 'Categoría 8' },
    { id: '20', title: 'Artículo 20', category: 'Categoría 8' },
    { id: '21', title: 'Artículo 21', category: 'Categoría 9' },
    { id: '22', title: 'Artículo 22', category: 'Categoría 9' },
    { id: '23', title: 'Artículo 23', category: 'Categoría 10' },
    { id: '24', title: 'Artículo 24', category: 'Categoría 10' },
    { id: '25', title: 'Artículo 25', category: 'Categoría 1' },
    { id: '26', title: 'Artículo 26', category: 'Categoría 2' },
    { id: '27', title: 'Artículo 27', category: 'Categoría 3' },
    { id: '28', title: 'Artículo 28', category: 'Categoría 4' },
    { id: '29', title: 'Artículo 29', category: 'Categoría 5' },
    { id: '30', title: 'Artículo 30', category: 'Categoría 6' },
    { id: '31', title: 'Artículo 31', category: 'Categoría 7' },
    { id: '32', title: 'Artículo 32', category: 'Categoría 8' },
    { id: '33', title: 'Artículo 33', category: 'Categoría 9' },
    { id: '34', title: 'Artículo 34', category: 'Categoría 10' },
    { id: '35', title: 'Artículo 35', category: 'Categoría 1' },
    { id: '36', title: 'Artículo 36', category: 'Categoría 2' },
    { id: '37', title: 'Artículo 37', category: 'Categoría 3' },
    { id: '38', title: 'Artículo 38', category: 'Categoría 4' },
    { id: '39', title: 'Artículo 39', category: 'Categoría 5' },
    { id: '40', title: 'Artículo 40', category: 'Categoría 6' },
    { id: '41', title: 'Artículo 41', category: 'Categoría 7' },
    { id: '42', title: 'Artículo 42', category: 'Categoría 8' },
    { id: '43', title: 'Artículo 43', category: 'Categoría 9' },
    { id: '44', title: 'Artículo 44', category: 'Categoría 10' },
    { id: '45', title: 'Artículo 45', category: 'Categoría 1' },
    { id: '46', title: 'Artículo 46', category: 'Categoría 2' },
    { id: '47', title: 'Artículo 47', category: 'Categoría 3' },
    { id: '48', title: 'Artículo 48', category: 'Categoría 4' },
    { id: '49', title: 'Artículo 49', category: 'Categoría 5' },
    { id: '50', title: 'Artículo 50', category: 'Categoría 6' },
  ];

  const toggleStarred = (id: string) => {
    setStarredArticles((prevStarred) =>
      prevStarred.includes(id) ? prevStarred.filter(item => item !== id) : [...prevStarred, id]
    );
  };

  const handleEllipsisPress = (id: string, y: number, x: number) => {
    setSelectedArticle(id);

    const { height, width } = Dimensions.get('window');
    const adjustedX = Math.max(10, Math.min(x - 60, width - 170));
    const adjustedY = Math.max(10, y - 50);

    setModalPosition({ top: adjustedY, left: adjustedX });
    setModalVisible(true);
  };

  const handleEdit = () => {
    console.log('Edit', selectedArticle);
    setModalVisible(false);
  };

  const handleDelete = () => {
    console.log('Delete', selectedArticle);
    setModalVisible(false);
  };

  const getSortedArticles = (category: string) => {
    const articles = initialArticlesData.filter(article => article.category === category);
    return articles.sort((a, b) => {
      const aStarred = starredArticles.includes(a.id);
      const bStarred = starredArticles.includes(b.id);
      if (aStarred && !bStarred) return -1;
      if (!aStarred && bStarred) return 1;
      return 0;
    });
  };

  const handleCreateArticle = () => {
    navigation.navigate('CrearArticulo');
  };


  const renderArticleItem = ({ item }) => (
    <View style={styles.articleItem}>
      <Text style={styles.articleTitle}>{item.title}</Text>
      <View style={styles.articleActions}>
        <TouchableOpacity onPress={() => toggleStarred(item.id)}>
          <Ionicons
            name={starredArticles.includes(item.id) ? "star" : "star-outline"}
            size={24}
            color="#FE9526"
            style={styles.starIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={(e) => handleEllipsisPress(item.id, e.nativeEvent.pageY, e.nativeEvent.pageX)}>
          <Ionicons name="ellipsis-vertical" size={24} color="#000033" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Background2 />
      <View style={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <View style={[styles.categoryTitleContainer, { backgroundColor: categoryColor }]}>
          <Text style={styles.categoryTitle}>{categoryTitle}</Text>
        </View>
        <Text style={styles.instructions}>
          Obtén organización dentro de todas tus categorías.
        </Text>

        {/* List of articles */}
        <FlatList
          data={getSortedArticles(categoryTitle)}
          renderItem={renderArticleItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginTop: 40 }}
        />

      </View>

      {/* Modal for edit/delete */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={[styles.modalContainer, { top: modalPosition.top, left: modalPosition.left }]}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.modalButton} onPress={handleEdit}>
                <Ionicons name="create-outline" size={24} color="white" style={styles.modalIcon} />
                <Text style={styles.modalButtonText}>Editar</Text>
              </TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
                <Ionicons name="trash-outline" size={24} color="white" style={styles.modalIcon} />
                <Text style={styles.modalButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Add button */}
      <TouchableOpacity style={styles.addButton} onPress={handleCreateArticle}>
        <Ionicons name="add-circle" size={70} color="#FE9526" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  categoryTitleContainer: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  backButton: {
    marginTop: 30,
    marginBottom: 40,
  },
  instructions: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 30,
    marginBottom: 20,
  },
  articleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#000033',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  articleTitle: {
    color: '#000033',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
  },
  articleActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    position: 'absolute',
    backgroundColor: '#37394A',
    borderRadius: 10,
    padding: 10,
    minWidth: 140,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalIcon: {
    marginRight: 10,
  },
  modalContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  modalButtonText: {
    fontSize: 16,
    color: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    marginVertical: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default CategoriaSeleccionada;
