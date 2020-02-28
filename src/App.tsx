import './App.css';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Description from './components/Description';
import { Movie } from './types/movie';
import Poster from './components/Poster';
import { RootState } from './redux/state';
import Title from './components/Title';
import { fetchMovies } from './redux/movies/actions';
import styled from 'styled-components';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movies = useSelector((state: RootState) => state.movies.movies);

  return (
    <div>
      {movies && (
        <div>
          {movies.map((movie: Movie) => (
            <MovieGrid key={movie.id}>
              <Poster path={movie.poster_path} width={'w185'} title={movie.title} />
              <MovieDetails>
                <Title title={movie.title} />
                <Description text={movie.overview} />
              </MovieDetails>
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

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
