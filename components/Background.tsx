import React from 'react';
import { StyleSheet, View } from 'react-native';

const Background = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueHalf} />
      <View style={styles.whiteHalf} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    zIndex: -1, // Para asegurar que esté detrás de otros elementos
  },
  blueHalf: {
    flex: 1,
    backgroundColor: '#01063E', // Azul
  },
  whiteHalf: {
    flex: 1,
    backgroundColor: '#ffffff', // Blanco
  },
});

export default Background;
