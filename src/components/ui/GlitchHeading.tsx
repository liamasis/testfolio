"use client";

import { FC, forwardRef, useEffect, useState } from 'react'

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
    const isBrowser = () => typeof window !== 'undefined'; 
    
    
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
    if (typeof window !== 'undefined') {
      // Check if window is defined (client-side rendering)
      window.addEventListener('resize', handleWindowSizeChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
      clearInterval(interval!);
    };
  }, []);

  const handleWindowSizeChange = () => {
    // Handle window size change logic here
    const isXlScreen = window.innerWidth >= 1280; // Adjust the width threshold as per your needs

    if (isXlScreen) {
      clearInterval(interval!);
      setDisplayText(text);
    }
  };

  if (typeof window !== 'undefined' && window.innerWidth >= 1280) {
    // Render plain h1 for xl screen or larger
    return <h1>{text}</h1>;
  }
  return (
    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {displayText || text}
    </h1>
  );
  
};

export default GlitchHeading