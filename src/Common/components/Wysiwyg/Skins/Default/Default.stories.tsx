import React from 'react';
import { Story, Meta } from '@storybook/react';
import { STORYBOOK_FOLDERS } from 'Common/constants/storybook.constants';

import DefaultSkin from './Default';
import { WysiwygSkinProps } from '../../Wysiwyg.interfaces';

export default {
  title: `${STORYBOOK_FOLDERS.DESIGN_SYSTEM}/${STORYBOOK_FOLDERS.COMMON}/${STORYBOOK_FOLDERS.COMPONENTS}/WYSIWYG`,
  component: DefaultSkin,
  args: {
    content:
      '<p><img data-src="/tooltip-dark.svg" src="/tooltip-dark.svg" style="width: 100%; max-width: fit-content;" alt="Search icon" class="cld-responsive" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
  },
  argTypes: {
    content: {
      name: 'WYSIWYG Content',
    },
    styleName: {
      table: { disable: true },
    },
  },
} as Meta;

const Template = (args: WysiwygSkinProps) => <DefaultSkin {...args} />;

export const Default: Story<WysiwygSkinProps> = Template.bind({});
