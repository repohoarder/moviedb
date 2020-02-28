import { Genre } from '../types/genre';
import { Movie } from '../types/movie';

export interface MovieState {
  movies: Movie[];
  moviesLoaded: boolean;
}

export interface GenreState {
  genres: Genre[];
  genresLoaded: boolean;
}

export interface RootState {
  movies: MovieState;
  genres: GenreState;
}
