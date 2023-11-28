import { FC, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';
import { Inter, Roboto, Averia_Serif_Libre } from 'next/font/google'

const inter = Inter({ 
  weight: ['400', '700'],
  subsets: ['latin'],
 })

const headingVariants = cva(
  'text-black dark:text-white text-center font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        lg: 'bold text-3xl sm:text-3xl md:text-3xl lg:text-5xl 2xl:text-6xl xl:text-left',
        md: 'text-4xl md:text-4xl lg:text-4xl',
        sm: 'text-lg md:text-xl lg:text-2xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface LargeHeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, 
    VariantProps<typeof headingVariants> {}


const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps> (
    ({ className, size, children, ...props }, ref) => {
      return (
        <h2
          ref={ref}
          {...props}
          className={cn(headingVariants({ size, className }), inter.className)}>
          {children}
        </h2>
      )
    }
  )
  
LargeHeading.displayName = 'Paragraph'

export default LargeHeading