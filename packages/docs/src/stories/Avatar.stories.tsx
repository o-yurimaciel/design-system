import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@yurimaciel-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/o-yurimaciel.png',
  },
  argTypes: {
    src: {
      type: 'string',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: 'undefined',
  },
}
