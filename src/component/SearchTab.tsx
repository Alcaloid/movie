import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Divider1} from './Divider';

const SearchTab = ({text, onClick}) => {
  return (
    <TouchableOpacity onPress={() => onClick(text)}>
      <View style={styles.contrainer}>
        <Text style={styles.text_search}>{text}</Text>
      </View>
      <Divider1 />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    height: 40,
    justifyContent: 'center',
  },
  text_search: {
    marginStart: 16,
    fontSize: 16,
  },
});

export default SearchTab;
