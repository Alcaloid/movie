import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const SearchBar = ({value, onSearch, onUpdate}) => {
  const [isFocus, setIsFocus] = useState(false);
  const input = useRef(null);

  const onCancelClick = () => {
    setIsFocus(false);
    input.current.blur();
  };

  const onSubmit = () => {
    Keyboard.dismiss;
    onSearch(value);
  };

  return (
    <View style={styles.search_bar_background}>
      <View style={styles.search_zone}>
        <Image
          style={styles.serach_icon}
          source={require('../image/search.png')}
        />
        <TextInput
          autoCorrect={false}
          ref={input}
          style={styles.text_input}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          onSubmitEditing={() => onSubmit()}
          onChangeText={(text) => onUpdate(text)}
        />
      </View>
      {isFocus && (
        <TouchableOpacity
          style={styles.cancel_view}
          onPress={() => onCancelClick()}>
          <Text style={styles.text_cancel}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  search_bar_background: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 48,
    padding: 8,
    backgroundColor: 'lightgray',
  },
  search_zone: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  serach_icon: {
    width: 20,
    height: 20,
    opacity: 0.5,
    marginStart: 8,
    alignSelf: 'center',
  },
  text_input: {
    flex: 1,
    marginEnd: 8,
    backgroundColor: 'white',
    margin: 8,
  },
  text_cancel: {
    color: 'dodgerblue',
  },
  cancel_view: {
    marginStart: 8,
    marginEnd: 8,
    alignSelf: 'center',
  },
});

export default SearchBar;
