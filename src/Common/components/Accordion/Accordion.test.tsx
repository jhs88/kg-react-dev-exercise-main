import React from 'react';
import { render } from '@testing-library/react';

import Accordion from './Accordion';
import { AC_SKIN_NAMES } from './Accordion.interfaces';

const DEFAULT_CONTENT =
  "Boosters are currently available for Pfizer recipients, starting 6 months after their second dose, specifically for:<ul><li>People ages 65 years and up</li><li>People 18 and up with underlying health conditions</li><li>People 18 and up who work or live in high-risk settings</li></ul>The FDA is currently reviewing Moderna's request for booster authorization and is expected to provide additional recommendations on boosters soon, including for Johnson & Johnson vaccine recipients.";
describe('Accordion Component', () => {
  test('Renders a Accordion component default skin', async () => {
    const { getByText } = render(
      <Accordion skin={AC_SKIN_NAMES.DEFAULT_SKIN} />
    );

    expect(getByText(DEFAULT_CONTENT)).toBeInTheDocument();
  });

  test('Nothing gets rendered', async () => {
    const { queryByText } = render(<Accordion skin={undefined} />);

    expect(queryByText(DEFAULT_CONTENT)).not.toBeInTheDocument();
  });
});
