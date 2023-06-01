import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import { cn } from '@/lib/utils';
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <html lang="en" className={cn('bg-white text-slate-900 antialiased', inter.className)}>
      <head>
        <title>liamo portfolio</title>
      </head>
      <body className='min-h-screen thisisatest antialised w-full h-full justify-center'>
        <Providers>
          <div className="gradient1"></div>
          <div className="gradient2"></div>
          <Navbar></Navbar>
          {children}
        </Providers>

        {/* allow for more height on mobile */}
       
      </body>
    </html>
  )
}
