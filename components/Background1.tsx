import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const Background1 = () => {
  const translateY = useRef(new Animated.Value(500)).current; // Valor inicial para la animación

  useEffect(() => {
    Animated.timing(
      translateY,
      {
        toValue: 0, // Valor final hacia donde se moverá (0 para abrirse desde abajo)
        duration: 200, // Duración de la animación en milisegundos (ajustado más rápido)
        useNativeDriver: true, // Optimización para uso del driver nativo
      }
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <View style={styles.blueHalf} />
      <View style={styles.whiteHalf} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
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

export default Background1;
