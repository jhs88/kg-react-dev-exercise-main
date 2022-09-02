import React from 'react';
import { Story, Meta } from '@storybook/react';
import { STORYBOOK_FOLDERS } from 'Common/constants/storybook.constants';

import AccordionItem from './DefaultItem';
import { AccordionItemProps } from '../../Accordion.interfaces';

export default {
  title: `${STORYBOOK_FOLDERS.DESIGN_SYSTEM}/${STORYBOOK_FOLDERS.COMMON}/${STORYBOOK_FOLDERS.COMPONENTS}/Accordion/AccordionItem`,
  component: AccordionItem,
  args: {
    id: 1,
    header: 'Item Header',
    headerImg: './img/avatar/av1.png',
    contnet: 'Content goes here',
  },
  argTypes: {
    id: { name: 'ID' },
    header: { name: 'Item header' },
    headerImg: { name: 'Item header image path' },
    content: { name: 'Item content' },
  },
} as Meta;

const Template = (args: AccordionItemProps) => <AccordionItem {...args} />;

export const DefaultAccordionItem: Story<AccordionItemProps> = Template.bind(
  {}
);
