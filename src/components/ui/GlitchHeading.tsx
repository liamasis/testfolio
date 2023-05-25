"use client";

import { FC, forwardRef, useEffect, useState } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';


interface GlitchyTextProps {
    text: string;
  }
  
  const GlitchHeading: React.FC<GlitchyTextProps> = ({ text }) => {
    const [displayText, setDisplayText] = useState<string>('');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: NodeJS.Timeout | null = null;
    let iteration = 0;

    const updateText = () => {
    setDisplayText(prevText => {
      return prevText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
    });

    iteration += 1 / 3;

    if (iteration >= text.length) {
      clearInterval(interval!);
    }
  };

  const handleMouseOver = () => {
    clearInterval(interval!);
    setDisplayText(text);
    interval = setInterval(updateText, 30);
  };

  const handleMouseOut = () => {
    clearInterval(interval!);
    setDisplayText('');
    iteration = 0;
  };

  useEffect(() => {
    return () => {
      clearInterval(interval!);
    };
  }, []); 

  return (
    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {displayText || text}
    </h1>
  );
  
};

export default GlitchHeading