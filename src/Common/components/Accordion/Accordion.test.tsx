import React from 'react';
import { render } from '@testing-library/react';

import Accordion from './Accordion';
import { AC_SKIN_NAMES } from './Accordion.interfaces';

const DEFAULT_HEADER = 'C10 Accordion skin S2 thumbnail';
const DEFAULT_SUB = 'Accordion 1.0 | Accordion-s1';
describe('Accordion Component', () => {
  test('Renders a Accordion component default skin', async () => {
    const { getByText } = render(
      <Accordion skin={AC_SKIN_NAMES.DEFAULT_SKIN} />
    );

    expect(getByText(DEFAULT_HEADER)).toBeInTheDocument();
    expect(getByText(DEFAULT_SUB)).toBeInTheDocument();
  });

  test('Nothing gets rendered', async () => {
    const { queryByText } = render(<Accordion skin={undefined} />);

    expect(queryByText(DEFAULT_HEADER)).not.toBeInTheDocument();
    expect(queryByText(DEFAULT_SUB)).not.toBeInTheDocument();
  });
});
