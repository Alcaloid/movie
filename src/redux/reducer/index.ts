import {combineReducers} from 'redux';
import manageMovie from './FavoriteMovieReducer';

const ManagerMovieReducer = combineReducers({
  favMovie: manageMovie,
});
export default ManagerMovieReducer;
