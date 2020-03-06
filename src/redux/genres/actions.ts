import { Action, Dispatch } from 'redux';
import { FETCH_GENRES, FetchGenresAction } from './reducers';

export function fetchGenres() {
  return async function(dispatch: Dispatch<FetchGenresAction>): Promise<Action> {
    const res = await fetch('https://react-cinema.netlify.com/api/genres', {
      method: 'GET'
    });

    const genres = await res.json();

    return dispatch({
      type: FETCH_GENRES,
      genres: genres.genres
    });
  };
}
