import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SearchBar, SearchTab} from '../component';
import {useSelector} from 'react-redux';
import {ResultScreenType} from '../type/ResultScreenType';

const SearchScreen = ({navigation}) => {
  const [isDisable, setIsDisable] = useState(true);
  const [value, setValue] = useState('');
  const favoriteMovie = useSelector((state) => state.favMovie);
  const searchData = useSelector((state) => state.searchMovie);

  useEffect(() => {
    if (favoriteMovie.length > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [favoriteMovie, setIsDisable]);

  const onFavoriteClick = () => {
    navigation.navigate('Result', {
      searchText: '',
      role: ResultScreenType.FAVORITE_MOVIE,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      headerRight: () => (
        <TouchableOpacity
          style={styles.button_right}
          disabled={isDisable}
          onPress={() => onFavoriteClick()}>
          <Text style={{color: isDisable ? 'lightgray' : 'dodgerblue'}}>
            Favorite
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isDisable]);

  const onSearchMovie = (text: string) => {
    //call api
    setValue('');
    navigation.navigate('Result', {
      searchText: text,
      role: ResultScreenType.SEARCH_MOVIE,
    });
  };

  const onUpdateValue = (text: string) => {
    setValue(text);
  };

  return (
    <SafeAreaView style={styles.background}>
      <SearchBar
        value={value}
        onSearch={onSearchMovie}
        onUpdate={onUpdateValue}
      />
      <FlatList
        data={searchData}
        renderItem={({item}) => (
          <SearchTab text={item} onClick={onSearchMovie} />
        )}
        keyExtractor={(index: number) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  button_right: {
    marginEnd: 8,
  },
});

export default SearchScreen;
