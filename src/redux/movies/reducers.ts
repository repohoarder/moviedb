import { Movie } from '../../types/movie';
import { MovieState } from '../state';

export const FETCH_MOVIES = 'FETCH_MOVIES';

export interface FetchMoviesAction {
  type: typeof FETCH_MOVIES;
  movies: Movie[];
}

export type MoviesActionTypes = FetchMoviesAction;

const initialState: MovieState = {
  movies: [],
  moviesLoaded: false
};

export default function(state = initialState, action: MoviesActionTypes): MovieState {
  const { type } = action;

  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: (action as FetchMoviesAction).movies,
        moviesLoaded: true
      };

    default:
      return state;
  }
}
