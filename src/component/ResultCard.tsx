import React, {FC} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MovieInfo} from '../type/movieInfo';
import {Divider1} from './Divider';

interface ResultCardProps {
  movieDetail: MovieInfo;
  onDetailClick: () => void;
}

const ResultCard: FC<ResultCardProps> = (props) => {
  const {movieDetail, onDetailClick} = props;
  const imageURL = `https://image.tmdb.org/t/p/w92${movieDetail.poster_path}`;
  return (
    <TouchableOpacity
      style={{backgroundColor: 'white'}}
      onPress={() => {
        onDetailClick(movieDetail);
      }}>
      <View style={styles.row_view}>
        <Image
          style={styles.image}
          source={{
            uri: imageURL,
          }}
        />
        <View style={styles.movie_info}>
          <Text style={styles.title}>{movieDetail.original_title}</Text>
          <Text style={styles.subTitle}>{movieDetail.release_date}</Text>
          <Text numberOfLines={4} ellipsizeMode="tail">
            {movieDetail.overview}
          </Text>
        </View>
      </View>
      <Divider1 />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 120,
  },
  row_view: {
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 8,
    paddingTop: 8,
  },
  movie_info: {
    flex: 3,
    marginStart: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    opacity: 0.7,
  },
});

export default ResultCard;
