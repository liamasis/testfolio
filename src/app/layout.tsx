import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Inter, Roboto, Averia_Serif_Libre } from 'next/font/google';

const averia = Averia_Serif_Libre({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={cn('bg-white text-slate-900 antialiased', averia.className)}>
      <head>
        <title>liamo portfolio</title>
        <link rel='icon' type='image/x-icon' href='/Favicon-LO-Grey-WhiteOutline.png' />
      </head>
      <body className='bg-slate-50 dark:bg-slate-900 antialised w-full xl:h-full justify-center'>
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
