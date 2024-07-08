import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener instalado este paquete
import Background1 from './Background1';

const Buscar = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSearch = () => {
    // Aquí puedes implementar la lógica de búsqueda según tus necesidades
    // Por ejemplo, podrías realizar una solicitud de búsqueda con el valor de `searchValue`
    // y luego establecer setShowResults(true) para mostrar los resultados.
    setShowResults(true);
  };

  return (
    <View style={styles.container}>
      <Background1 />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Buscar</Text>
        </View>
      </View>

      <View style={[styles.searchBarContainer, { alignSelf: 'center', marginTop: 40 }]}>
        <Ionicons name="search" size={20} color="#000033" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#000033"
          selectionColor="#000033"
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          onSubmitEditing={handleSearch}
        />
      </View>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>
          Escribe una palabra clave y deja que nuestra herramienta haga el resto.
        </Text>
      </View>

      {showResults && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>RESULTADOS</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000033', // Color de fondo azul para todo el componente
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButton: {
    marginRight: 10,
    marginTop: 70, // Ajustado el margen superior del botón de retroceso
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 70, // Ajustado el margen superior del título
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    marginRight: 10,
    width: '90%', // Ajustado el ancho del contenedor de la barra de búsqueda
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
  instructionsContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  instructionsText: {
    color: 'white',
    fontSize: 16,
    marginTop: 30, // Ajustado el margen superior del texto de instrucciones
  },
  resultsContainer: {
    marginTop: 20, // Espacio entre las instrucciones y el subtítulo de resultados
    paddingHorizontal: 16,
  },
  resultsText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Buscar;
