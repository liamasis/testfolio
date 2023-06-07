import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import { Github, Linkedin } from 'lucide-react';


export default function Home() {
  return (
    <main className='h-[calc(100vh-5rem)] flex items-start xl:items-center justify-center'>
      <div className="bg-orange-300 mt-10 xl:mt-0 dark:bg-orange-600 rounded-full inline-flex aspect-square lg:w-2/6 absolute w-80 opacity-90"></div>
        
      <div className="grid grid-cols-1 xl:grid-cols-6 h-full flex items-center z-50">
        <div className="col-start-1 xl:col-start-2 text-center col-span-3">
          <LargeHeading size={'lg'} className="py-5">Constructing Clean Code</LargeHeading>
          <LargeHeading size={'lg'} className="py-5">Creating Sleek UI</LargeHeading>
          <LargeHeading size={'lg'} className="py-5">Communicating for <br/>Improvement</LargeHeading>

        </div>
        <div className="col-start-1 col-span-1 xl:col-start-5 xl:col-span-2 h-full w-full flex-grow items-start grid grid-rows-3 ">
          <div className="col-span-3 xl:col-span-1 h-full w-full flex justify-center items-center ">
            <div className="min-h-1/2 w-4/5 flex-col justify-center items-center border-4 border-solid rounded-lg dark:border-slate-400 border-slate-800">
              <div className="h-6 border-b-4 dark:border-slate-400 border-slate-800 flex flex-row-reverse gap-1 items-center justify-items-end">
                <div className="pr-1 flex gap-1">
                  <div className="rounded-full bg-green-400 h-4 w-4 border-2 dark:border-slate-400 border-slate-800"></div>
                  <div className="rounded-full bg-orange-400 h-4 w-4 border-2 dark:border-slate-400 border-slate-800"></div>
                  <div className="rounded-full bg-red-400 h-4 w-4 border-2 dark:border-slate-400 border-slate-800"></div>
                </div>
              </div>
             <Paragraph className='p-4'>My name is <b className='text-black  dark:text-white'>Liam O&apos;Brien</b>, a web developer and software engineer.  </Paragraph>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-1 h-full w-full flex justify-center items-center ">
          <div className="w-5/6 min-h-5/6 flex-col justify-center items-center border-4 border-solid rounded-lg dark:border-slate-400 border-slate-800">
            <div className="h-6 border-b-4 dark:border-slate-400 border-slate-800 flex flex-row-reverse gap-1 items-center justify-items-end">
              <div className="pr-1 flex gap-1">
                <div className="rounded-full bg-green-400 h-4 w-4 border-2 dark:border-slate-400 border-slate-800"></div>
                <div className="rounded-full bg-orange-400 h-4 w-4 border-2 dark:border-slate-400 border-slate-800"></div>
                <div className="rounded-full bg-red-400 h-4 w-4 border-2 dark:border-slate-400 border-slate-800"></div>
              </div>
            </div>
            <Paragraph className='p-4'>I have two years experience developing applications for B2B Supply Chain Management businesses with Post Graduate Studies in Artificial Intelligence.
            
            <ul>
              <li> <b>.NET</b>, <b>JavaScript</b>, <b>Python</b> </li>
              <li> <b>Postman</b>, <b>AWS</b> & <b>Azure</b> </li>
              <li> <b>React</b> & <b>Express</b></li>
            </ul></Paragraph>
          </div>
          </div>
          <div className="col-span-3 xl:col-span-1 row-span-1 h-full w-full flex justify-center items-center xl:items-start">
            <div className="h-1/3 w-2/3 flex-col items-center justify-end">
              <div className="flex flex-row-reverse items-center  ">
                <a href="https://www.linkedin.com/in/liam-o-brien-/" target="_blank" rel="noopener noreferrer" >
                  <Linkedin className={'text-black dark:text-white mx-2'}/>
                </a>
                <Paragraph className='flex m-2 justify-center items-center'><b className='text-black dark:text-white'>Linkedin</b></Paragraph>
              </div>
              
              
              <div className="flex flex-row-reverse items-center">
                <a href="https://www.linkedin.com/in/liam-o-brien-/" target="_blank" rel="noopener noreferrer" >
                  <Github className={'text-black dark:text-white m-2'}/>
                </a>
                <Paragraph className='flex m-2 justify-center items-center'><b  className='text-black  dark:text-white'>Github</b></Paragraph>
              </div>
              
                
              
            </div>
          </div>
        </div>
      </div>
        {/* The circle */}
        
        {/* <div className="invisible lg:visible lg:col-span-1"></div> */}
        
        
    </main>
  )
}
