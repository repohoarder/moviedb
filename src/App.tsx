import './App.css';

import React, { useEffect } from 'react';
import { fetchGenres, fetchMovies } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Movie } from './types/movie';
import Poster from './components/Poster';
import { RootState } from './redux/state';
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
        <MovieWall>
          {movies.map((movie: Pick<Movie, 'id' | 'title' | 'poster_path'>) => (
            <Poster key={movie.id} path={movie.poster_path} width="w185" title={movie.title} />
          ))}
        </MovieWall>
      )}
    </div>
  );
};

const MovieWall = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  grid-gap: 24px;
`;

export default App;
