import {SearchActionType} from '../../type/ActionType';

export function saveSearchMovieName(name: string) {
  return {
    type: SearchActionType.ADD_SEARCHMOVIE,
    name,
  };
}

export function removeSearchMovieName(name: string) {
  return {
    type: SearchActionType.REMOVE_SEARCHMOVIE,
    name,
  };
}
