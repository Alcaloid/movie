import {SearchActionType} from '../../type/ActionType';

function SearchMovieReducer(state = [], action) {
  switch (action.type) {
    case SearchActionType.ADD_SEARCHMOVIE:
      const checker = state.findIndex((element) => action.name === element);
      if (checker != -1) {
        state.splice(checker, 1);
      }
      const data = [action.name, ...state];
      if (data.length > 5) {
        data.splice(data.length - 1, 1);
      }
      return data;
    case SearchActionType.REMOVE_SEARCHMOVIE: {
      const index = state.findIndex((element) => element == action.name);
      if (index != -1) {
        state.splice(index, 1);
      }
      return [...state];
    }
    default:
      return state;
  }
}

export default SearchMovieReducer;
