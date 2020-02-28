import { Genre } from '../../types/genre';
import { GenreState } from '../state';

export const LOAD_GENRES_ACTION = 'LOAD_GENRES_ACTION';

export interface LoadGenresAction {
  type: typeof LOAD_GENRES_ACTION;
  genres: Genre[];
}

export type GenresActionTypes = LoadGenresAction;

const initialState: GenreState = {
  genres: [],
  genresLoaded: false
};

export default function(state = initialState, action: GenresActionTypes): GenreState {
  const { type } = action;

  switch (type) {
    case LOAD_GENRES_ACTION:
      return {
        ...state,
        genres: (action as LoadGenresAction).genres,
        genresLoaded: true
      };

    default:
      return state;
  }
}
