import React from 'react';
import { Story, Meta } from '@storybook/react';
import { STORYBOOK_FOLDERS } from 'Common/constants/storybook.constants';

import DefaultSkin from './Default';
import { AccordionSkinProps } from '../../Accordion.interfaces';
import AccordionItem from './DefaultItem';

export default {
  title: `${STORYBOOK_FOLDERS.DESIGN_SYSTEM}/${STORYBOOK_FOLDERS.COMMON}/${STORYBOOK_FOLDERS.COMPONENTS}/Accordion`,
  component: DefaultSkin,
  subcomponent: { AccordionItem },
  args: {
    header: 'Header',
    subheader: 'Subheader',
    items: [
      {
        id: 1,
        header: 'Item Header',
        headerImg: './img/avatar/av1.png',
        content: 'Content goes here.',
      },
    ],
  },
  argTypes: {
    header: { name: 'Header' },
    subheader: { name: 'Subheader' },
    items: { name: 'Accordion Items' },
  },
} as Meta;

const Template = (args: AccordionSkinProps) => <DefaultSkin {...args} />;

export const Default: Story<AccordionSkinProps> = Template.bind({});
