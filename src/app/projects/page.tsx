"use client";
import LargeHeading from '@/components/ui/LargeHeading';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'

export default function Projects() {

  const [isLoading, setIsLoading] = useState(true);
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    // Simulate delay for transition effect after page load
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <main className=' h-[calc(100vh-5rem)] flex items-center justify-center '>
        {/* The circle */}
        <div className={`rounded-full inline-flex items-center justify-center aspect-square lg:w-2/6 absolute w-80 opacity-90 transition-colors duration-500 ${isLoading ? 'bg-orange-300 dark:bg-orange-600' : 'bg-green-300 dark:bg-green-600'}`}></div>
        
    </main>
  )
}
