import Image from 'next/image'

import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import GlitchHeading from '@/components/ui/GlitchHeading';

export default function Home() {
  return (
    <main className='h-[calc(100vh-5rem)] flex items-center justify-center '>
        {/* The circle */}
        <div className="bg-orange-700 rounded-full inline-flex items-center justify-center aspect-square lg:w-2/6 absolute w-80 opacity-90 "></div>
        
        <div className=" grid grid-rows-10 grid-cols-1 lg:grid-cols-6 z-50 grid-flow-col">
        <div className="col-span-2 col-start-6 row-span-2 row-start-1 text-white"> 
          
        </div>
          {/* <div className="invisible lg:visible lg:col-span-1"></div> */}
          <div className="lg:col-start-2 lg:row-start-3 lg:row-span-4 lg:col-span-3 col-span-1">
            <LargeHeading className="py-5 text-left">Creating Clean Code</LargeHeading>
            <LargeHeading className="py-5 text-left">Producing Sleek UI</LargeHeading>
            <LargeHeading className="py-5 text-left">Communicating for Improvement</LargeHeading>
            
          </div>
          
        </div>
        
    </main>
  )
}
