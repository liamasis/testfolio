import Link from 'next/link';
import { FC } from 'react'
import ThemeToggle from './ThemeToggle';
import GlitchHeading from './ui/GlitchHeading';
import LargeHeading from './ui/LargeHeading';

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
    
    return <div className='backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
        <div className="container max-w-7xl m-auto w-full flex justify-between items-center">
           {/*  <Link href='/' className='text-dark dark:text-white'>
                liamo portfolio
            </Link> */}
            <div className="md-hidden text-white">
                <LargeHeading size={'sm'}>LIAMO</LargeHeading>
                <GlitchHeading text="PORTFOLIO" />
            </div>
            <div className="hidden md:flex gap-4">
                <ThemeToggle />
                <Link
                    href = '/contact'
                    className='text-dark dark:text-white'
                >
                    
                    <GlitchHeading text="CONTACT" />
                </Link>
                
                <Link
                    href = '/projects'
                    className='text-dark dark:text-white'
                >
                   <GlitchHeading text="PROJECTS" />
                </Link>
            </div> 
        </div>
    </div>
}

export default Navbar

