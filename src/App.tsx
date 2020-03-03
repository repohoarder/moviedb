import './App.css';

import React, { useEffect } from 'react';
import { fetchGenres, fetchMovies } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Movie } from './types/movie';
import MovieCard from './components/MovieCard';
import { RootState } from './redux/state';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  const movies = useSelector((state: RootState) => state.movies.movies);

  return (
    <div>
      {movies && (
        <div>
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
