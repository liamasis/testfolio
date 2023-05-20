import Image from 'next/image'

import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';

export default function Home() {
  return (
    <main className=' h-screen flex items-center justify-center '>
        {/* The circle */}
        <div className="bg-red-700 rounded-full inline-flex items-center justify-center aspect-square w-2/6 absolute"></div>
        
        <div className="p-40 grid grid-cols-1 z-50">
          <LargeHeading className="py-5">Creating Clean Code</LargeHeading>
          <LargeHeading className="py-5">Producing Sleek UI</LargeHeading>
          <LargeHeading className="py-5">Communicating for Improvement</LargeHeading>
        </div>
        
    </main>
  )
}
