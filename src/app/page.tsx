import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import { Github, Instagram, Link, Linkedin } from 'lucide-react';
import MacBox from '@/components/ui/MacBox';

// DO SSR AND WORK ALL THAT STUFF OUT

export default function Home() {
  return (
    <main className='h-full flex xl:h-[calc(100vh-5rem)] flex xl:items-center items-start justify-center'>
      <div className='bg-orange-300 mt-2 xl:mt-0 dark:bg-orange-600 rounded-full inline-flex aspect-square md:w-1/8 lg:w-2/6 xl:w-1/3 absolute w-72 opacity-90'></div>

      <div className='grid grid-cols-1 xl:grid-cols-6 h-full flex items-center z-50'>
        <div className='col-start-1 xl:col-start-2 xl:text-left text-center xl:col-span-3 h-72 flex flex-col items-center xl:items-start justify-center m-2'>
          <LargeHeading size={'lg'} className='py-4 2xl:py-8'>
            Constructing Clean Code
          </LargeHeading>
          <LargeHeading size={'lg'} className='py-4 2xl:py-8'>
            Creating Sleek UI
          </LargeHeading>
          <LargeHeading size={'lg'} className='py-4 2xl:py-8'>
            Communicating for <br />
            Improvement
          </LargeHeading>
        </div>
        <div className='col-start-1 col-span-2 xl:col-start-5 flex flex-col justify-center h-full gap-y-5'>
          <div className='flex-grow flex items-end justify-center'>
            <MacBox
              msg="Hello I am Liam O'Brien, a software developer based in Dublin, IE. I have designed and built a large range of applications for the logistics
              industry. "
              size='small'
            />
          </div>

          <div className='flex-grow flex items-center justify-center'>
            <div className='w-5/6 min-h-5/6 flex-col justify-start items-start border-[3px] border-solid rounded-lg dark:border-slate-500 border-slate-800'>
              <div className='h-6 border-b-[3px] dark:border-500 dark:border-slate-500 border-slate-800 flex flex-row-reverse gap-1 items-center justify-items-end'>
                <div className='pr-1 flex gap-1'>
                  <div className='rounded-full bg-green-400 h-4 w-4 border-0 dark:border-slate-500 border-slate-800'></div>
                  <div className='rounded-full bg-orange-400 h-4 w-4 border-0 dark:border-slate-500 border-slate-800'></div>
                  <div className='rounded-full bg-red-400 h-4 w-4 border-0 dark:border-slate-500 border-slate-800'></div>
                </div>
              </div>
              <div className='flex flex-col p-4'>
                <Paragraph className='text-left'>
                  <>
                    <p>
                      <strong>VBA</strong> and <strong>Python</strong> libaries{' '}
                      <strong>NumPy</strong>, <strong>Pandas</strong> & <strong>MatPlotLib</strong>{' '}
                      for reporting & cleaning data.
                    </p>
                    <p>
                      <strong>PHP</strong> & <strong>Django</strong> I have used for backend
                      systems, creating <strong>API gateways</strong>, <strong>services</strong> to
                      communicate with the <strong>database</strong>.
                    </p>
                    <p>
                      <strong>XML, JSON, CSV, FTS, MariaDB</strong> & <strong>SQLite</strong> are
                      the main data sources I have experience wrangling.
                    </p>
                  </>
                </Paragraph>
              </div>
            </div>
          </div>
          <div className='flex-grow flex items-center 2xl:items-start justify-center'>
            <div className='flex xl:flex-row flex-col items-center justify-center '>
              <div className='flex items-center lg:justify-center'>
                <a href='https://www.instagram.com/binarythought.wav/' target='_blank'>
                  <Instagram className={'text-black dark:text-white mx-2'} />
                </a>
                <Paragraph className='flex m-2 justify-center items-center'>
                  <b className='text-black dark:text-white'>Instagram</b>
                </Paragraph>
              </div>

              <div className='flex items-center lg:justify-center'>
                <a
                  href='https://www.linkedin.com/in/liam-o-brien-/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className={'text-black dark:text-white mx-2'} />
                </a>
                <Paragraph className='flex m-2 justify-center items-center'>
                  <b className='text-black dark:text-white'>Linkedin</b>
                </Paragraph>
              </div>

              <div className='flex items-center lg:justify-center'>
                <a href='https://github.com/liamasis' target='_blank' rel='noopener noreferrer'>
                  <Github className={'text-black dark:text-white m-2'} />
                </a>
                <Paragraph className='flex m-2 justify-center items-center'>
                  <b className='text-black dark:text-white'>Github</b>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
