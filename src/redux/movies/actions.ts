import { Action, Dispatch } from 'redux';
import { FETCH_MOVIES, FetchMoviesAction } from './reducers';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function fetchMovies() {
  return async function(dispatch: Dispatch<FetchMoviesAction>): Promise<Action> {
    const res = await fetch(`${API_BASE_URL}/movies`, {
      method: 'GET'
    });

    const movies = await res.json();

    console.log(movies);

    return dispatch({
      type: FETCH_MOVIES,
      movies
    });
  };
}
