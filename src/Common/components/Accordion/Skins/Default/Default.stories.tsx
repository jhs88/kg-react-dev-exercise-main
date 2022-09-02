import React from 'react';
import { Story, Meta } from '@storybook/react';
import { STORYBOOK_FOLDERS } from 'Common/constants/storybook.constants';

import DefaultSkin from './Default';
import { AccordionSkinProps } from '../../Accordion.interfaces';

export default {
  title: `${STORYBOOK_FOLDERS.DESIGN_SYSTEM}/${STORYBOOK_FOLDERS.COMMON}/${STORYBOOK_FOLDERS.COMPONENTS}/Accordion`,
  component: DefaultSkin,
  args: {
    content: '<p>This is a test.</p>',
    header: 'Header',
    subheader: 'Subheader',
    accHeader: 'Item Header',
    accContent: 'Content goes here.',
  },
  argTypes: {
    content: { name: 'Page Content' },
    header: { name: 'Header' },
    subheader: { name: 'Subheader' },
    accHeader: { name: 'Accordion Item Header' },
    accContent: { name: 'Accordion Item Content' },
  },
} as Meta;

const Template = (args: AccordionSkinProps) => <DefaultSkin {...args} />;

export const Default: Story<AccordionSkinProps> = Template.bind({});
