import { Action, Dispatch } from 'redux';
import { FETCH_GENRES, FetchGenresAction } from './reducers';

export function fetchGenres() {
  return async function(dispatch: Dispatch<FetchGenresAction>): Promise<Action> {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_API_KEY}`
      }
    });

    const genres = await res.json();

    return dispatch({
      type: FETCH_GENRES,
      genres: genres.results
    });
  };
}
