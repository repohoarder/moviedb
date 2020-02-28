import { Action, Dispatch } from 'redux';
import { FETCH_MOVIES, FetchMoviesAction } from './reducers';

export function fetchMovies() {
  return async function(dispatch: Dispatch<FetchMoviesAction>): Promise<Action> {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer {{apiToken}}'
      }
    });

    const movies = await res.json();

    return dispatch({
      type: FETCH_MOVIES,
      movies: movies.results
    });
  };
}
