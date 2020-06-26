import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import ManagerMovieReducer from './reducer';

const persistConfig = {
  key: 'movie',
  storage: AsyncStorage,
  whitelist: ['favMovie'],
};

const persistedReducer = persistReducer(persistConfig, ManagerMovieReducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store);
export {store, persistor};
