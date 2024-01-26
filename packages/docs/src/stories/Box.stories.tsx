import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@yurimaciel-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Teste</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
