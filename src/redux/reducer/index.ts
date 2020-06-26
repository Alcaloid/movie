import {combineReducers} from 'redux';
import manageMovie from './FavoriteMovieReducer';
import SearchMovieReducer from './SearchMovieReducer';

const ManagerMovieReducer = combineReducers({
  favMovie: manageMovie,
  searchMovie: SearchMovieReducer,
});
export default ManagerMovieReducer;
