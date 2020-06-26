import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const LoadingIndicator = ({isNotLoad}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{isNotLoad ? 'End Data' : 'Loading'}</Text>
    </View>
  );
};
//https://www.flaticon.com/authors/kiranshastry
//https://www.flaticon.com/authors/freepik
const styles = StyleSheet.create({
  card: {
    height: 120,
    padding: 8,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    opacity: 0.5,
  },
});

export default LoadingIndicator;
