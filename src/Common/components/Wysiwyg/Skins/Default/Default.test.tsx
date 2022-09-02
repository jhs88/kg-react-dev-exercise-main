import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as DefaultSkinStories from './Default.stories';

const { Default } = composeStories(DefaultSkinStories);

describe('Wysiwyg Component -> Default Skin', () => {
  test('Renders a content if present', async () => {
    const { getByText } = render(
      <Default content="Successfully rendered wysiwyg" />
    );

    expect(getByText('Successfully rendered wysiwyg')).toBeInTheDocument();
  });
  test('Renders empty fragment if content not present', async () => {
    const { queryByText } = render(<Default content={undefined} />);

    expect(
      queryByText('Successfully rendered wysiwyg')
    ).not.toBeInTheDocument();
  });
});
