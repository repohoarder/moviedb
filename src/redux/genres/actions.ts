import { LOAD_GENRES_ACTION, LoadGenresAction } from './reducers';

import { Genre } from '../../types/genre';

export function loadGenres(genres: Genre[]): LoadGenresAction {
  return {
    type: LOAD_GENRES_ACTION,
    genres
  };
}
