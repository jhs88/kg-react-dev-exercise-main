import React from 'react';
import { render } from '@testing-library/react';

import Wysiwyg from './Wysiwyg';
import { SKIN_NAMES } from './Wysiwyg.interfaces';

const DEFAULT_CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
describe('Wysiwyg Component', () => {
  test('Renders a Wysiwyg component default skin', async () => {
    const { getByText, container } = render(
      <Wysiwyg skin={SKIN_NAMES.DEFAULT_SKIN} />
    );

    expect(getByText(DEFAULT_CONTENT)).toBeInTheDocument();
    expect(container.firstChild).not.toHaveClass('text-center');
  });

  test('Renders a Wysiwyg component center aligned skin', async () => {
    const { getByText, container } = render(
      <Wysiwyg skin={SKIN_NAMES.CENTER_ALIGNED_SKIN} />
    );

    expect(getByText(DEFAULT_CONTENT)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('text-center');
  });
  test('Nothing gets rendered', async () => {
    const { queryByText } = render(<Wysiwyg skin={undefined} />);

    expect(queryByText(DEFAULT_CONTENT)).not.toBeInTheDocument();
  });
});
