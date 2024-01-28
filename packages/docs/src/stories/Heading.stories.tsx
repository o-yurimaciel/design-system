import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@yurimaciel-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example text',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
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
