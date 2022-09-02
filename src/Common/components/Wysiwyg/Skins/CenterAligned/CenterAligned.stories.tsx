import React from 'react';
import { Story, Meta } from '@storybook/react';
import { STORYBOOK_FOLDERS } from 'Common/constants/storybook.constants';

import CenterAlignedSkin from './CenterAligned';
import { WysiwygSkinProps } from '../../Wysiwyg.interfaces';

export default {
  title: `${STORYBOOK_FOLDERS.DESIGN_SYSTEM}/${STORYBOOK_FOLDERS.COMMON}/${STORYBOOK_FOLDERS.COMPONENTS}/WYSIWYG`,
  component: CenterAlignedSkin,
  args: {
    content: '<p>Lorem Ipsum</p>',
    styleName: 'text-center',
  },
  argTypes: {
    content: {
      name: 'WYSIWYG Content',
    },
    styleName: {
      name: 'Style',
      options: ['Display 1', 'Display 2', 'Display 3', 'Display 4'],
      mapping: {
        'Display 1': 'display-1',
        'Display 2': 'display-2',
        'Display 3': 'display-3',
        'Display 4': 'display-4',
      },

      control: { type: 'select' },
    },
  },
} as Meta;

const Template = (args: WysiwygSkinProps) => <CenterAlignedSkin {...args} />;

export const CenterAligned: Story<WysiwygSkinProps> = Template.bind({});
