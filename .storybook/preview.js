import React from 'react';
import '../src/Common/assets/styles/Global.scss';

export const decorators = [
  (Story) => (
    <div className="CommonSite">
      <Story />
    </div>
  ),
];

export const customViewports = {
  galaxys9: {
    name: 'Galaxy S9',
    styles: {
      height: '740px',
      width: '360px',
    },
    type: 'mobile',
  },
  iPad: {
    name: 'iPad',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  iphonese2: {
    name: 'iPhone SE',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
  macbookPro: {
    name: 'MacbookPro',
    styles: {
      width: '1440px',
      height: '900px',
    },
    type: 'desktop',
  },
  microsoftSurfaceBook3: {
    name: 'Microsoft Surface Book 3',
    styles: {
      width: '1620px',
      height: '1080px',
    },
    type: 'desktop',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
