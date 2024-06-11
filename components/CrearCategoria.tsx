import React from 'react';
import { View, StyleSheet } from 'react-native';
import Background from './Background';  // Asegúrate de que la ruta sea correcta

const CrearCategoria = () => {
  return (
    <View style={styles.container}>
      <Background />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CrearCategoria;