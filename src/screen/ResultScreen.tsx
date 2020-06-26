import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {ResultCard, LoadingIndicator} from '../component';
import axios from 'axios';
import ENDPOINT_MOVIE, {HeaderApi} from '../config/config';
import {MovieInfo} from '../type/movieInfo';
import {useSelector} from 'react-redux';
import {ResultScreenType} from '../type/ResultScreenType';

const ResultScreen = ({route, navigation}) => {
  const {searchText} = route.params;
  const {role} = route.params;
  const [movieResult, setMovieResult] = useState<MovieInfo>([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const favoriteMovie = useSelector((state) => state.favMovie);

  const callMovieApi = (query: string, page: number) => {
    setIsLoading(true);
    axios
      .get(ENDPOINT_MOVIE, {
        headers: {'api-key': HeaderApi},
        params: {
          query: query,
          page: page,
        },
      })
      .then((response) => {
        setPage(page + 1);
        if (maxPage == -1) {
          //set one time
          setMaxPage(response.data.total_pages);
        }
        const movie = [...movieResult, ...response.data.results];
        setMovieResult(movie);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // when come to this page try to fetch movie
    if (role == ResultScreenType.SEARCH_MOVIE) {
      callMovieApi(searchText, page);
    } else {
      setMovieResult(favoriteMovie);
    }
  }, [searchText, role, setMovieResult, favoriteMovie]);

  const checkFavoriteMovie = (detail: MovieInfo) => {
    const checker = favoriteMovie.findIndex(
      (element) =>
        element.title == detail.title &&
        element.release_date == detail.release_date,
    );
    if (checker != -1) {
      return true;
    }
    return false;
  };

  const onClickDetail = (detail: MovieInfo) => {
    const isMovieFav = checkFavoriteMovie(detail);
    navigation.navigate('Detail', {
      movieDetail: detail,
      movieFavorite: isMovieFav,
    });
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20; // detect before real end scroll
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const fetchDataNextPage = () => {
    if (!isLoading && page <= maxPage) {
      callMovieApi(searchText, page);
    }
  };

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            fetchDataNextPage();
          }
        }}
        scrollEventThrottle={400}>
        {movieResult &&
          movieResult.map((item: MovieInfo, index: number) => {
            return (
              <ResultCard
                key={index}
                movieDetail={item}
                onDetailClick={onClickDetail}
              />
            );
          })}
        {(isLoading || page > maxPage) &&
          role != ResultScreenType.FAVORITE_MOVIE && (
            <LoadingIndicator isNotLoad={!(maxPage == -1) && page > maxPage} />
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ResultScreen;
