import React from 'react';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }: TitleProps) => <h2>{title}</h2>;

export default Title;
