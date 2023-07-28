import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import { Github, Instagram, Link, Linkedin } from 'lucide-react';
import useEffect from 'react'; 
import { useTheme } from 'next-themes';

export default function Home() {
  /* attempt number 3*/

  return (
    <main className='h-full flex xl:h-[calc(100vh-5rem)] flex xl:items-center items-start justify-center'>
      <div className="bg-orange-300 mt-2 xl:mt-0 dark:bg-orange-600 rounded-full inline-flex aspect-square md:w-1/8 lg:w-2/6 xl:w-1/4 absolute w-72 opacity-90"></div>
        
      <div className="grid grid-cols-1 xl:grid-cols-6 h-full flex items-center z-50">
        <div className="col-start-1 xl:col-start-2 xl:text-left text-center xl:col-span-3">
          <LargeHeading size={'lg'} className="py-4 2xl:py-8">Constructing Clean Code</LargeHeading>
          <LargeHeading size={'lg'} className="py-4 2xl:py-8">Creating Sleek UI</LargeHeading>
          <LargeHeading size={'lg'} className="py-4 2xl:py-8">Communicating for <br/>Improvement</LargeHeading>

        </div>
        <div className="col-start-1 col-span-1 xl:col-start-5 xl:col-span-4 h-full w-full flex-grow items-start grid grid-rows-3 xl:grid-rows-4 2xl:grid-rows-6">
          <div className="col-span-3 xl:col-span-1 xl:row-start-1 2xl:row-start-2 xl:row-span-1 h-full w-full flex justify-center items-center ">
            <div className="min-h-1/2 w-4/5 flex-col justify-center items-center border-4 border-solid rounded-lg dark:border-slate-500 border-slate-800">
              <div className="h-6 border-b-4 dark:border-slate-500 border-slate-800 flex flex-row-reverse gap-1 items-center justify-items-end">
                <div className="pr-1 flex gap-1">
                  <div className="rounded-full bg-green-400 h-4 w-4 border-2 dark:border-slate-500 border-slate-800"></div>
                  <div className="rounded-full bg-orange-400 h-4 w-4 border-2 dark:border-slate-500 border-slate-800"></div>
                  <div className="rounded-full bg-red-400 h-4 w-4 border-2 dark:border-slate-500 border-slate-800"></div>
                </div>
              </div>
             <Paragraph className='p-2'>My name is <b className='text-black dark:text-white'>Liam O&apos;Brien</b>, a web developer and software engineer.  </Paragraph>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-1 xl:row-start-2 2xl:row-start-3 xl:row-span-2 h-full w-full flex justify-center items-center ">
          <div className="w-5/6 min-h-5/6 flex-col justify-start items-start border-4 border-solid rounded-lg dark:border-slate-500 border-slate-800">
            <div className="h-6 border-b-4 dark:border-500 dark:border-slate-500 border-slate-800 flex flex-row-reverse gap-1 items-center justify-items-end">
              <div className="pr-1 flex gap-1">
                <div className="rounded-full bg-green-400 h-4 w-4 border-2 dark:border-slate-500 border-slate-800"></div>
                <div className="rounded-full bg-orange-400 h-4 w-4 border-2 dark:border-slate-500 border-slate-800"></div>
                <div className="rounded-full bg-red-400 h-4 w-4 border-2 dark:border-slate-500 border-slate-800"></div>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <Paragraph className='text-left'>Looking for a developer position in Europe, with two years experience developing & supporting applications in the Supply Chain & Ag-tech
              industries with a Post Graduate Diploma of Computer Science from the University of Melbourne, Australia.
              </Paragraph>
              </div>
            </div>
          </div>
          <div className="col-start-2 xl:col-span-1 row-span-1 xl:row-start-4 2xl:row-start-5 h-full w-full flex justify-center items-center">
            <div className="flex xl:flex-row flex-col items-center justify-center ">
              
              <div className="flex items-center lg:justify-center">
                <a href="https://www.instagram.com/binarythought.wav/" target="_blank">
                  <Instagram className={'text-black dark:text-white mx-2'}/>
                </a>
                <Paragraph className='flex m-2 justify-center items-center'><b className='text-black dark:text-white'>Instagram</b></Paragraph>
              </div>

              <div className="flex items-center lg:justify-center">
                <a href="https://www.linkedin.com/in/liam-o-brien-/" target="_blank" rel="noopener noreferrer" >
                  <Linkedin className={'text-black dark:text-white mx-2'}/>
                </a>
                <Paragraph className='flex m-2 justify-center items-center'><b className='text-black dark:text-white'>Linkedin</b></Paragraph>
              </div>
              
              <div className="flex items-center lg:justify-center">
                <a href="https://github.com/liamasis" target="_blank" rel="noopener noreferrer" >
                  <Github className={'text-black dark:text-white m-2'}/>
                </a>
                <Paragraph className='flex m-2 justify-center items-center'><b  className='text-black dark:text-white'>Github</b></Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
