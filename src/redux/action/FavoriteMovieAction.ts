import {ManageFavorite} from '../../type/ActionType';
import {MovieInfo} from '../../type/movieInfo';

export function addFavorite(movie: MovieInfo) {
  return {type: ManageFavorite.ADD_FAVORITE, movie};
}

export function removeFavorite(movie: MovieInfo) {
  return {type: ManageFavorite.REMOVE_FAVORITE, movie};
}
