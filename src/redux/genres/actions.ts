import { Action, Dispatch } from 'redux';
import { FETCH_GENRES, FetchGenresAction } from './reducers';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function fetchGenres() {
  return async function(dispatch: Dispatch<FetchGenresAction>): Promise<Action> {
    const res = await fetch(`${API_BASE_URL}/genres`, {
      method: 'GET'
    });

    const genres = await res.json();

    return dispatch({
      type: FETCH_GENRES,
      genres: genres.genres
    });
  };
}
