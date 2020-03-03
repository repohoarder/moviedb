import React from 'react';
import styled from 'styled-components';

export interface GenreLabelProps {
  name: string;
}

const GenreLabel: React.FC<GenreLabelProps> = ({ name }: GenreLabelProps) => (
  <GenreLabelWrapper>{name}</GenreLabelWrapper>
);

const GenreLabelWrapper = styled.span`
  margin-right: 6px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default GenreLabel;
