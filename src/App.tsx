import './App.css';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Movie } from './types/movie';
import MovieCard from './components/MovieCard';
import { RootState } from './redux/state';
import { fetchGenres } from './redux/genres/actions';
import { fetchMovies } from './redux/movies/actions';
import styled from 'styled-components';

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
            <MovieGrid key={movie.id}>
              <MovieCard movie={movie} />
            </MovieGrid>
          ))}
        </div>
      )}
    </div>
  );
};

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 16px;
`;

export default App;
