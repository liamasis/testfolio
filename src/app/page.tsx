import Image from 'next/image'

import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import GlitchHeading from '@/components/ui/GlitchHeading';
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className='h-[calc(100vh-5rem)]  flex items-center justify-center'>
      <div className="bg-orange-300 dark:bg-orange-600 rounded-full inline-flex items-center justify-center aspect-square lg:w-2/6 absolute w-80 opacity-90"></div>
        
      <div className=" grid grid-cols-6 h-full w-full flex items-center z-50">
        <div className="col-start-2 col-span-3">
          <LargeHeading className="py-5 text-left">Constructing Clean Code</LargeHeading>
          <LargeHeading className="py-5 text-left">Creating Sleek UI</LargeHeading>
          <LargeHeading className="py-5 text-left">Communicating for <br/>Improvement</LargeHeading>

        </div>
        <div className="col-start-5 col-span-2 h-full w-full  flex items-start grid grid-rows-3">
          <div className="col-span-1 h-full w-full flex justify-center items-center ">
            <div className="h-1/2 w-4/5 xxl:h-1/3 xxl:w-1/2 flex justify-center items-center p-4 border-4 border-solid rounded-lg border-slate-800">
             <Paragraph>My name is <b>Liam O&apos;Brien</b>, a web developer and software engineer. </Paragraph>
            </div>
          </div>
          <div className="col-span-1 h-full w-full flex justify-center items-center ">
          <div className="w-5/6 h-5/6 flex justify-center items-center border-4 border-solid rounded-lg border-slate-800">
             <Paragraph>My name is Liam O&apcupiditate.</Paragraph>
            </div>
          </div>
          <div className="col-span-1 h-full w-full flex justify-center items-center">
            <Paragraph>Here are my contact details</Paragraph>
            <Linkedin className={'dark:text-white mx-2'}/>
            <Github className={'dark:text-white'}/>
          </div>
        </div>
      </div>
        {/* The circle */}
        
        {/* <div className="invisible lg:visible lg:col-span-1"></div> */}
        
        
    </main>
  )
}
