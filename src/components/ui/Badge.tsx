import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center border px-2.5 py-0.5 text-xs font-medium tracking-widest uppercase transition-colors',
  {
    variants: {
      variant: {
        gold: 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]',
        outline: 'border-[#2E2E2E] text-[#8A8A8A]',
        dark: 'border-[#2E2E2E] bg-[#1A1A1A] text-[#8A8A8A]',
      },
    },
    defaultVariants: {
      variant: 'gold',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
