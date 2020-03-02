import { Genre } from '../../types/genre';
import { GenreState } from '../state';

export const FETCH_GENRES = 'FETCH_GENRES';

export interface FetchGenresAction {
  type: typeof FETCH_GENRES;
  genres: Genre[];
}

export type GenresActionTypes = FetchGenresAction;

const initialState: GenreState = {
  genres: [],
  genresLoaded: false
};

export default function(state = initialState, action: GenresActionTypes): GenreState {
  const { type } = action;

  switch (type) {
    case FETCH_GENRES:
      return {
        ...state,
        genres: (action as FetchGenresAction).genres,
        genresLoaded: true
      };

    default:
      return state;
  }
}
