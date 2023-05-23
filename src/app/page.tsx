import Image from 'next/image'

import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import GlitchHeading from '@/components/ui/GlitchHeading';

export default function Home() {
  return (
    <main className='h-[calc(100vh-5rem)]  flex items-center justify-center'>
      <div className="bg-orange-700 rounded-full inline-flex items-center justify-center aspect-square lg:w-2/6 absolute w-80 opacity-90"></div>
        
      <div className=" grid grid-cols-6 h-full w-full flex items-center z-50">
        <div className="col-start-2 col-span-3">
          <LargeHeading className="py-5 text-left">Creating Clean Code</LargeHeading>
          <LargeHeading className="py-5 text-left">Producing Sleek UI</LargeHeading>
          <LargeHeading className="py-5 text-left">Communicating for <br/>Improvement</LargeHeading>
        </div>
        <div className="col-start-5 col-span-2 h-full w-full bg-red-700 flex items-start">
          end
        </div>
      </div>
        {/* The circle */}
        
        {/* <div className="invisible lg:visible lg:col-span-1"></div> */}
        
        
    </main>
  )
}
