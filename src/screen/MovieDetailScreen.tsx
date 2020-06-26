import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeFavorite, addFavorite} from '../redux/action';

const MovieDetailScreen = ({route, navigation}) => {
  const {movieFavorite} = route.params;
  const {movieDetail} = route.params;
  const imageURL = `https://image.tmdb.org/t/p/w92${movieDetail.poster_path}`;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const onFavoriteClick = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFavorite(movieDetail));
    } else {
      setIsFav(true);
      dispatch(addFavorite(movieDetail));
    }
  };

  useEffect(() => {
    // check this movie had user favorite
    if (movieFavorite) {
      setIsFav(true)
    }
  }, [movieFavorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.button_right}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: 'dodgerblue'}}>Back to Search</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.contrainer}>
      <ScrollView style={styles.scroll_view} contentContainerStyle={{flex: 1}}>
        <View style={styles.child_view}>
          <Image
            style={styles.image}
            source={{
              uri: imageURL,
            }}
          />
          <View style={styles.overview}>
            <Text style={styles.text_title}>{movieDetail.original_title}</Text>
            <Text style={styles.text_average_vote}>
              Average votes: {movieDetail.vote_average}
            </Text>
            <Text style={styles.text_detail}>{movieDetail.overview}</Text>
          </View>
        </View>
        <View style={styles.favorite_button}>
          <TouchableOpacity onPress={() => onFavoriteClick()}>
            <Text style={styles.favorite_text}>
              {isFav ? 'UnFavorite' : 'Favorite'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  button_right: {
    marginEnd: 8,
  },
  scroll_view: {
    flex: 1,
  },
  child_view: {
    flex: 4,
  },
  favorite_button: {
    flex: 1,
  },
  favorite_text: {
    textAlign: 'center',
    padding: 8,
    backgroundColor: 'orange',
    color: 'white',
  },
  image: {
    flex: 1,
    width: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  overview: {
    flex: 2,
    padding: 8,
  },
  text_title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  text_average_vote: {
    fontSize: 16,
    marginTop: 8,
  },
  text_detail: {
    fontSize: 12,
    paddingStart: 4,
    paddingEnd: 4,
    marginTop: 8,
  },
});

export default MovieDetailScreen;
