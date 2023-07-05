import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import { cn } from '@/lib/utils';
import '@/styles/globals.css'
import { Inter, Roboto, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const jetbrains = JetBrains_Mono({
  subsets:['latin'],
  weight: ['400', '700']
})

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
      <body className='bg-slate-50 dark:bg-slate-900 antialised w-full xl:h-full justify-center'>
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
       
      </body>
    </html>
  )
}
