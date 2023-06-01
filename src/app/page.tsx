import Image from 'next/image'

import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import GlitchHeading from '@/components/ui/GlitchHeading';
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-5rem)] flex items-center justify-center'>
      <div className="bg-orange-300 dark:bg-orange-600 rounded-full inline-flex items-center justify-center aspect-square lg:w-2/6 absolute w-80 opacity-90"></div>
        
      <div className=" grid grid-cols-1 xl:grid-cols-6 h-full w-full flex items-center z-50">
        <div className="col-start-1 xl:col-start-2 col-span-3">
          <LargeHeading className="py-5 xl:text-left">Constructing Clean Code</LargeHeading>
          <LargeHeading className="py-5 xl:text-left">Creating Sleek UI</LargeHeading>
          <LargeHeading className="py-5 xl:text-left">Communicating for <br/>Improvement</LargeHeading>

        </div>
        <div className="col-start-1 col-span-1 xl:col-start-5 xl:col-span-2 h-full w-full flex-grow items-start grid grid-rows-3 xl:grid-rows-3">
          <div className="col-span-3 xl:col-span-1  h-full w-full flex justify-center items-center ">
            <div className="min-h-1/2 w-4/5 flex justify-center items-center p-4 border-4 border-solid rounded-lg border-slate-800">
             <Paragraph>My name is <b>Liam O&apos;Brien</b>, a web developer and software engineer. </Paragraph>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-1 h-full w-full flex justify-center items-center ">
          <div className="w-5/6 min-h-5/6 flex justify-center items-center border-4 border-solid rounded-lg border-slate-800 p-4">
             <Paragraph>Two years experience developing applications for B2B Supply Chain Management businesses with Post Graduate Studies in Artificial Intelligence.
              
              <ul>
                <li> <b>.NET</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>SQL</b>, <b>VBA</b>, <b>PHP</b>, <b>Python</b> </li>
                <li> <b>Powershell</b>, <b>Postman</b>, <b>AWS</b> & <b>Azure Services</b> </li>
                <li> <b>365</b>, <b>Linux</b> & <b>Windows Server</b></li>
              </ul></Paragraph>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-1  row-span-1 h-full w-full flex justify-center items-center">
            
            <Paragraph>Here are my contact details</Paragraph>
            <a href="https://www.linkedin.com/in/liam-o-brien-/" target="_blank" rel="noopener noreferrer">
              <Linkedin className={'dark:text-white mx-2'}/>
            </a>
            <a href="https://github.com/liamasis" target="_blank" rel="noopener noreferrer">
              <Github className={'dark:text-white'}/>
            </a>
            
          </div>
        </div>
      </div>
        {/* The circle */}
        
        {/* <div className="invisible lg:visible lg:col-span-1"></div> */}
        
        
    </main>
  )
}
