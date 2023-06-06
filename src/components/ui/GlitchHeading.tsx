"use client";

import { FC, forwardRef, useEffect, useState } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';
import useWindowSize from '@/lib/useWindowSize';
/* 
TODO:
  - If it is mobile or smaller then XL, remove the glitchy heading... made custom hook. DONE.
  
*/
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

  const windowSize = useWindowSize(); // Custom hook to get window size
  const isXlScreen = windowSize.width >= 1280; // Adjust the width threshold as per your needs

  useEffect(() => {
    if (!isXlScreen) {
      setDisplayText(text); // If screen size is not xl, display the text immediately
    }
  }, [isXlScreen, text]);
  
  useEffect(() => {
    return () => {
      clearInterval(interval!);
    };
  }, []); 

  if (!isXlScreen) {
    return <h1>{text}</h1>; // If screen size is not xl, return plain h1 without glitch effect
  }

  return (
    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {displayText || text}
    </h1>
  );
  
};

export default GlitchHeading