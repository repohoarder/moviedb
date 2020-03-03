import Description from './Description';
import GenreLabel from './GenreLabel';
import { Movie } from '../types/movie';
import Poster from './Poster';
import React from 'react';
import { RootState } from '../redux/state';
import Title from './Title';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }: MovieCardProps) => {
  const genres = useSelector((state: RootState) => state.genres.genres);

  return (
    <MovieCardWrapper>
      <Poster path={movie.poster_path} width={'w185'} title={movie.title} />
      <MovieDetails>
        <Title title={movie.title} />
        <Genres>
          {movie.genre_ids.map(id => {
            const genre = genres.find(genre => genre.id === id);

            return genre && <GenreLabel key={id} name={genre.name} />;
          })}
        </Genres>
        <Description text={movie.overview} />
      </MovieDetails>
    </MovieCardWrapper>
  );
};

const MovieCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 12px;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Genres = styled.div`
  display: flex;
`;

export default MovieCard;
