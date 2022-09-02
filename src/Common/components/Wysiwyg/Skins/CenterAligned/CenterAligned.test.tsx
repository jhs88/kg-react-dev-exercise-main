import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as CenterAlignedSkinStories from './CenterAligned.stories';

const { CenterAligned } = composeStories(CenterAlignedSkinStories);

describe('Wysiwyg Component - Center Aligned Skin->', () => {
  test('Renders a content if present', async () => {
    const { getByText } = render(
      <CenterAligned content="Successfully rendered wysiwyg" />
    );

    expect(getByText('Successfully rendered wysiwyg')).toBeInTheDocument();
  });

  test('Renders empty fragment if content not present', async () => {
    const { queryByText } = render(<CenterAligned content={undefined} />);

    expect(queryByText('Successfully')).not.toBeInTheDocument();
  });

  test('Renders a content with style class', async () => {
    const { getByText, container } = render(
      <CenterAligned
        content="Successfully rendered wysiwyg"
        styleName="text-center"
      />
    );

    expect(getByText('Successfully rendered wysiwyg')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('text-center');
  });
});
