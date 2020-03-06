import { Action, Dispatch } from 'redux';
import { FETCH_MOVIES, FetchMoviesAction } from './reducers';

export function fetchMovies() {
  return async function(dispatch: Dispatch<FetchMoviesAction>): Promise<Action> {
    const res = await fetch('https://react-cinema.netlify.com/api/movies', {
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
