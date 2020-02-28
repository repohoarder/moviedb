import { combineReducers } from 'redux';
import genres from './genres/reducers';
import movies from './movies/reducers';

const rootReducer = combineReducers({
  movies,
  genres
});

export default rootReducer;
