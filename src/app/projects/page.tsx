"use client";
import LargeHeading from '@/components/ui/LargeHeading';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import Paragraph from '@/components/ui/Paragraph';
import FadeSection from '@/components/FadeSection';


export default function Projects() {

  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoading, setFirstLoading] = useState(true)

  const { theme, setTheme } = useTheme()
  useEffect(() => {
    // Simulate delay for transition effect after page load
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    setTimeout(() => {
      setFirstLoading(false);
    }, 800);


  }, []);

  return (
    <main className=' xl:h-[calc(100vh-5rem)] flex items-center justify-center'>
        {/* The circle */}
        <div className={`rounded-full inline-flex items-center justify-center aspect-square lg:w-2/6 absolute w-80 opacity-90 transition-colors duration-500 ${isLoading ? 'bg-orange-300 dark:bg-orange-600' : 'bg-green-300 dark:bg-green-600'}`}></div>
        <div className="h-full w-full grid grid-cols-1 xl:grid-cols-2 grid-rows-2 z-50">
          
          <FadeSection heading={'This is my heading'} paragraph={'woah what the fuck it worked first try?'} delayTime={900} />
          <FadeSection heading={'This is my heading'} paragraph={'woah what the fuck it worked first try?'} delayTime={1000} />
          <FadeSection heading={'This is my heading'} paragraph={'woah what the fuck it worked first try?'} delayTime={950} />
          <FadeSection heading={'This is my heading'} paragraph={'woah what the fuck it worked first try?'} delayTime={1050} />
          
        </div>
    </main>
  )
}
