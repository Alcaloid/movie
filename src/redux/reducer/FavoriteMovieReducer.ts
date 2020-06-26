import {ManageFavorite} from '../../type/ActionType';

const initialState = [];

function manageMovie(state = initialState, action) {
  switch (action.type) {
    case ManageFavorite.ADD_FAVORITE:
      return [...state, action.movie];
    case ManageFavorite.REMOVE_FAVORITE: {
      const index = state.findIndex(
      (element) =>
        element.title == action.movie.title &&
        element.release_date == action.movie.release_date,
    );
      if (index != -1) {
        state.splice(index, 1);
      }
      return [...state];
    }
    default:
      return state;
  }
}

export default manageMovie;
