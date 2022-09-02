import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as DefaultItemStories from './DefaultItem.stories';

const { DefaultAccordionItem } = composeStories(DefaultItemStories);

describe('Accordion Component -> Default Item', () => {
  test('Renders a Accordion Item if present', async () => {
    const { getByText } = render(
      <DefaultAccordionItem
        id={1}
        header="Item Header"
        headerImg="./img/avatar/av1.png"
        content="Content goes here."
      />
    );

    expect(getByText('Item Header')).toBeInTheDocument();
    expect(getByText('Content goes here.')).toBeInTheDocument();
  });
  test('Renders empty fragment if id & content not present', async () => {
    const { queryByText } = render(
      <DefaultAccordionItem
        id={undefined}
        header={undefined}
        headerImg={undefined}
        content={undefined}
      />
    );

    expect(queryByText('Item Header')).not.toBeInTheDocument();
    expect(queryByText('Content goes here.')).not.toBeInTheDocument();
  });
});
