import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        gold: 'bg-[#C9A84C] text-[#0E0E0E] hover:bg-[#E8C96B] tracking-widest uppercase text-xs',
        outline: 'border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0E0E0E] tracking-widest uppercase text-xs',
        ghost: 'text-[#B0B0B0] hover:text-[#C9A84C] hover:bg-transparent',
        dark: 'bg-[#1A1A1A] text-[#B0B0B0] border border-[#2E2E2E] hover:border-[#C9A84C] hover:text-[#C9A84C]',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-8 text-xs',
        lg: 'h-13 px-12 text-sm',
      },
    },
    defaultVariants: {
      variant: 'gold',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
