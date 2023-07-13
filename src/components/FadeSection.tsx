
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

    useEffect(() => {
        // Simulate delay for transition effect after page load
        setTimeout(() => {
        setIsLoading(false);
        }, delayTime);

    }, [delayTime]);

    return (
    <div className="grid-span-1 flex justify-center items-center">
        <div className={`w-96 h-48 p-2 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'} inline-block border border-transparent hover:outline-solid dark:shadow-stone-500 hover:shadow-lg hover:outline-4 rounded-lg`}>
            <LargeHeading size={'sm'} className='text-center'>{heading} </LargeHeading>
            <Paragraph className='p-2'>{paragraph}</Paragraph>
            <div className="w-full flex justify-center items-center font-bold"><Link href={link}>{linkName}</Link>
            </div>
        </div>
    </div>);
}

export default FadeSection;
