import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Divider1 = () => {
  return <View style={styles.divider1} />;
};

const styles = StyleSheet.create({
  divider1: {
    height: 1,
    marginStart: 16,
    backgroundColor: 'lightgray',
  },
});
