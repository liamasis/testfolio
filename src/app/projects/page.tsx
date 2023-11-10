"use client";
import LargeHeading from '@/components/ui/LargeHeading';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import Paragraph from '@/components/ui/Paragraph';
import FadeSection from '@/components/ui/FadeSection';


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
    <main className='flex h-[calc(100vh-5rem)] flex items-center justify-center'>
        {/* The circle */}
        <div className={`mt-2 xxl:mt-0 rounded-full inline-flex aspect-square md:w-1/8 lg:w-2/6 xl:w-1/4 absolute w-72 opacity-90 transition-colors duration-500 ${isLoading ? 'bg-orange-300 dark:bg-orange-600' : 'bg-green-300 dark:bg-green-600'}`}></div>
        <div className="h-full w-full grid grid-cols-1 xl:grid-cols-2 grid-rows-2 z-50">
          
          <FadeSection heading={'Portfolio'} paragraph={`Made in Typescript, developed with Figma, NextJS and Tailwind, and AWS Amplify for CI/CD.`} delayTime={900} link={"https://github.com/liamasis/testfolio"} linkName={"Github"} />
          <FadeSection heading={'Modal + Noughts & Crosses'} paragraph={'Using different npm packages & react developed a noughts and crosses game inside a modal.'} delayTime={1000} link={"https://github.com/liamasis/typescript-tiktak"} linkName={"Github"}/>
          <FadeSection heading={'Static Site'} paragraph={'One of my first projects was to build a static site for my friend to display her art, written with PHP & Bootstrap.'} delayTime={1200} link={"https://www.missstephanieart.com.au/"} linkName={"Live site"}/>
          <FadeSection heading={'Art Installation'} paragraph={'Working within a large team I maintained the application developed with Python, Django, Celery, Azure Services & Docker.'} delayTime={1300} link={"https://github.com/liamasis/scrape/"} linkName={"Github"}/>
          
        </div>
    </main>
  )
}
