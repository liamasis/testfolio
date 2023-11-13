
"use client";
import { FC } from 'react'

import LargeHeading from '@/components/ui/LargeHeading';
import { useEffect, useState } from 'react';
import Paragraph from '@/components/ui/Paragraph';
import Link from 'next/link'


interface FadeSectionProps {
    heading: string;
    paragraph: string;
    delayTime: number;
    link: string;
    linkName: string;
}

const FadeSection: FC<FadeSectionProps> = ({ heading, paragraph, delayTime, link, linkName }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isHover, setHover] = useState(false);

    useEffect(() => {
        // Simulate delay for transition effect after page load
        setTimeout(() => {
        setIsLoading(false);
        }, delayTime);

    }, [delayTime]);

    return (
    <div className="grid-span-1 flex justify-center items-center">
        <div
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
         className={`w-80 min-h-48 p-2 
            duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'} 
             dark:shadow-stone-500 rounded-lg`}>
            <LargeHeading size={'sm'} className='text-center'>{heading} </LargeHeading>
            <Paragraph className='p-2 dark:text-slate-400'>{paragraph}</Paragraph>
            <div className={`w-full flex justify-center items-center font-bold dark:text-slate-100 drop-shadow-lg`}>
                <a href={link} className={`bg-red border px-8 onhover:bg-redS rounded dark:border-slate-800`}>
                    {linkName}
                </a>
            </div>
        </div>
    </div>);
}

export default FadeSection;
