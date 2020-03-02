import Description from './Description';
import { Movie } from '../types/movie';
import Poster from './Poster';
import React from 'react';
import Title from './Title';
import styled from 'styled-components';

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }: MovieCardProps) => (
  <>
    <Poster path={movie.poster_path} width={'w185'} title={movie.title} />
    <MovieDetails>
      <Title title={movie.title} />
      <Description text={movie.overview} />
    </MovieDetails>
  </>
);

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MovieCard;
