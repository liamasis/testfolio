"use client";
import LargeHeading from '@/components/ui/LargeHeading';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import Paragraph from '@/components/ui/Paragraph';


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
    <main className=' h-[calc(100vh-5rem)] flex items-center justify-center'>
        {/* The circle */}
        <div className={`rounded-full inline-flex items-center justify-center aspect-square lg:w-2/6 absolute w-80 opacity-90 transition-colors duration-500 ${isLoading ? 'bg-orange-300 dark:bg-orange-600' : 'bg-green-300 dark:bg-green-600'}`}></div>
        <div className="h-full w-full grid grid-cols-2 grid-rows-2 z-50">
          <div className="grid-span-1 flex justify-center items-center">
            <div className="w-96 h-48 p-2  inline-block border border-transparent hover:outline-solid hover:shadow-lg hover:outline-4 rounded-lg">
              <LargeHeading size={'sm'} className='text-center'>React & Express Landing Page </LargeHeading>
              <Paragraph>Lorem ipsum dolor sit amet consectetur, ulpa pariatur praesentium natus. Eligendi, cumque suscipit!</Paragraph>
            </div>
          </div>
          <div className="grid-span-1 flex justify-center items-center">
            <div className="w-96 h-48 p-2  inline-block border border-transparent hover:outline-solid hover:shadow-lg hover:outline-4 rounded-lg">
              <LargeHeading size={'sm'} className='text-center'>React & Express Landing Page </LargeHeading>
              <Paragraph>Lorem ipsum dolor sit amet consectetur, ulpa pariatur praesentium natus. Eligendi, cumque suscipit! 
                <a href="asd">asdasf</a>
              </Paragraph>
            </div>
          </div>
          <div className="grid-span-1 flex justify-center items-center">
            <div className="w-96 h-48 p-2  inline-block border border-transparent hover:outline-solid hover:shadow-lg hover:outline-4 rounded-lg">
              <LargeHeading size={'sm'} className='text-center'>React & Express Landing Page </LargeHeading>
              <Paragraph>Lorem ipsum dolor sit amet consectetur, ulpa pariatur praesentium natus. Eligendi, cumque suscipit!</Paragraph>
            </div>
          </div>
          <div className="grid-span-1 flex justify-center items-center">
            <div className="w-96 h-48 p-2  inline-block border border-transparent hover:outline-solid hover:shadow-lg hover:outline-4 rounded-lg">
              <LargeHeading size={'sm'} className='text-center'>React & Express Landing Page </LargeHeading>
              <Paragraph>Lorem ipsum dolor sit amet consectetur, ulpa pariatur praesentium natus. Eligendi, cumque suscipit!</Paragraph>
            </div>
          </div>
          
        </div>
    </main>
  )
}
