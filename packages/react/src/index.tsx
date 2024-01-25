import { ComponentProps } from '@stitches/react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray500',
  borderRadius: '$md',
  color: 'white',
  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '$2',
      },
      big: {
        fontSize: 16,
        padding: '$4',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
