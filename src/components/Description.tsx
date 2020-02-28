import React from 'react';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }: DescriptionProps) => (
  <div>
    <p>{text}</p>
  </div>
);

export default Description;
