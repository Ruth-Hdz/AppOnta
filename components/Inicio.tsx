import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Background from './Background';
import { Ionicons } from '@expo/vector-icons';

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.headerContainer}>
        <View >
          <View style={styles.textWithIconContainer}>
            <Text style={styles.text}>Hola,</Text>
            <Ionicons name="menu" size={32} color="#ffffff" style={styles.icon} />
          </View>
          <Text style={styles.text}>Violeta</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={24} color="#01063E" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#01063E"
            selectionColor="#01063E" // Nuevo estilo
          />
        </View>
        <Text style={styles.text3}>Categorias</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
  },
  
  textWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
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
  text3: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Inicio;