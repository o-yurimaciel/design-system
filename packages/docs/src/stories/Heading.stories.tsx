import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@yurimaciel-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example text',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: 'inline-radio',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, heading always be an h2. You can change this with the property "as"',
      },
    },
  },
}
