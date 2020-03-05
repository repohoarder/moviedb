import React from 'react';

interface PosterProps {
  path: string;
  width: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';
  title: string;
}

const Poster: React.FC<PosterProps> = ({ path, width, title }: PosterProps) => (
  <div>
    <img src={`https://image.tmdb.org/t/p/${width}/${path}`} title={title} alt={title} />
  </div>
);

export default Poster;
