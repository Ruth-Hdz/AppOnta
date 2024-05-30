import React from 'react';
import { StyleSheet, View } from 'react-native';

const Background2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueThird} />
      <View style={styles.whiteTwoThirds} />
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
    zIndex: -1, 
  },
  blueThird: {
    flex: 1,
    backgroundColor: '#01063E', 
  },
  whiteTwoThirds: {
    flex: 2, 
    backgroundColor: '#ffffff', 
  },
});

export default Background2;
