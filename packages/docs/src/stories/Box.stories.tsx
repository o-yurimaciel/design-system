import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@yurimaciel-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Teste</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
