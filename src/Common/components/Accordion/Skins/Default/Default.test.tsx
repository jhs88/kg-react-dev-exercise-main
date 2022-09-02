import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as DefaultSkinStories from './Default.stories';

const { Default } = composeStories(DefaultSkinStories);

describe('Accordion Component -> Default Skin', () => {
  test('Renders a content if present', async () => {
    const { getByText } = render(<Default header="Header" />);

    expect(getByText('Header')).toBeInTheDocument();
  });
  test('Renders empty fragment if content not present', async () => {
    const { queryByText } = render(<Default header={undefined} />);

    expect(
      queryByText('Successfully rendered Accordion')
    ).not.toBeInTheDocument();
  });
});
