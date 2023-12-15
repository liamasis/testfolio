import { FC, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const paragraphVariants = cva('max-w-prose text-black dark:text-slate-100 mb-2 text-center Inter', {
  variants: {
    size: {
      default: 'text-base sm:text-lg md:text-[22px] 2xl:text-[22px]',
      sm: 'text-sm, sm:text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn(paragraphVariants({ size, className }))}>
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
