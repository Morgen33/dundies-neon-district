import React from 'react';
import { RainbowLetter } from './rainbow-letter';

interface RainbowTextProps {
  text: string;
  className?: string;
  baseDelay?: number;
  letterDelay?: number;
}

export const RainbowText = ({ 
  text, 
  className = "", 
  baseDelay = 0, 
  letterDelay = 0.1 
}: RainbowTextProps) => {
  const letters = text.split('');

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <RainbowLetter 
          key={index} 
          delay={baseDelay + (index * letterDelay)}
        >
          {letter}
        </RainbowLetter>
      ))}
    </span>
  );
};